from flask import Blueprint, request
from extensions import db
from models.user_model import User

from flask_jwt_extended import create_access_token

import bcrypt

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/auth")
def auth():
    return {
        "message": "Auth Route Working"
    }

# REGISTER
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    existing_user = User.query.filter_by(
        email=data["email"]
    ).first()

    if existing_user:
        return {
            "message": "Email already exists"
        }, 400

    hashed_password = bcrypt.hashpw(
        data["password"].encode("utf-8"),
        bcrypt.gensalt()
    )

    new_user = User(
        name=data["name"],
        email=data["email"],
        password=hashed_password.decode("utf-8")
    )

    db.session.add(new_user)

    db.session.commit()

    return {
        "message": "Registration Successful"
    }

# LOGIN
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    user = User.query.filter_by(
        email=data["email"]
    ).first()

    if not user:
        return {
            "message": "Invalid Email"
        }, 400

    password_match = bcrypt.checkpw(
        data["password"].encode("utf-8"),
        user.password.encode("utf-8")
    )

    if not password_match:
        return {
            "message": "Invalid Password"
        }, 400

    access_token = create_access_token(
        identity=str(user.id)
    )

    return {
        "message": "Login Successful",
        "token": access_token,
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
    }

# GET ALL USERS
@auth_bp.route("/users", methods=["GET"])
def get_users():

    users = User.query.all()

    all_users = []

    for user in users:

        all_users.append({
            "id": user.id,
            "name": user.name,
            "email": user.email
        })

    return all_users