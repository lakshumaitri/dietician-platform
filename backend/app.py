from flask import Flask
from flask_cors import CORS

from config import Config
from extensions import db, jwt

def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)

    jwt.init_app(app)

    # IMPORT ROUTES
    from routes.auth_routes import auth_bp
    from routes.booking_routes import booking_bp
    from routes.contact_routes import contact_bp

    # REGISTER ROUTES
    app.register_blueprint(auth_bp)

    app.register_blueprint(booking_bp)

    app.register_blueprint(contact_bp)

    @app.route("/")
    def home():
        return {
            "message": "Backend Running"
        }

    with app.app_context():
        db.create_all()

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)