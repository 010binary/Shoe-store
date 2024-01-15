from flask import Flask


def initapp():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "uSE FLASK HTPASSWORD"

    # Importing the views variable from Views.py
    from .view import views

    # Importing the Auth variable from Auth.py
    from .auth import auth

    # Registering the views and auth import
    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/" )

    return app
