from flask import Blueprint, request

from extensions import db
from models.booking_model import Booking

booking_bp = Blueprint("booking", __name__)

@booking_bp.route("/booking", methods=["GET"])
def booking():
    return {
        "message": "Booking Route Working"
    }

@booking_bp.route("/create-booking", methods=["POST"])
def create_booking():

    data = request.json

    new_booking = Booking(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        program=data["program"],
        goals=data["goals"]
    )

    db.session.add(new_booking)

    db.session.commit()

    return {
        "message": "Booking Created Successfully"
    }

# GET ALL BOOKINGS
@booking_bp.route("/all-bookings", methods=["GET"])
def all_bookings():

    bookings = Booking.query.all()

    all_data = []

    for booking in bookings:

        all_data.append({
            "id": booking.id,
            "name": booking.name,
            "email": booking.email,
            "phone": booking.phone,
            "program": booking.program,
            "goals": booking.goals
        })

    return all_data