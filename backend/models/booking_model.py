from extensions import db

class Booking(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100))

    email = db.Column(db.String(100))

    phone = db.Column(db.String(20))

    program = db.Column(db.String(100))

    goals = db.Column(db.Text)