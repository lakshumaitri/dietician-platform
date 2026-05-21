from flask import Blueprint, request

from extensions import db
from models.contact_model import Contact

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/contact", methods=["GET"])
def contact():
    return {
        "message": "Contact Route Working"
    }

@contact_bp.route("/send-message", methods=["POST"])
def send_message():

    data = request.json

    new_contact = Contact(
        name=data["name"],
        email=data["email"],
        message=data["message"]
    )

    db.session.add(new_contact)

    db.session.commit()

    return {
        "message": "Message Sent Successfully"
    }

# GET ALL CONTACT MESSAGES
@contact_bp.route("/all-messages", methods=["GET"])
def all_messages():

    messages = Contact.query.all()

    all_data = []

    for message in messages:

        all_data.append({
            "id": message.id,
            "name": message.name,
            "email": message.email,
            "message": message.message
        })

    return all_data