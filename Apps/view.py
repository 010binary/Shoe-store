from flask import Blueprint, render_template

views = Blueprint('view', __name__)

"""
Function for routes
"""

@views.route("/")
@views.route("/home")
def home():
    return render_template("index.html")


@views.route("/shop")
def shop():
    return render_template("shop.html")

@views.errorhandler(404)
def error(error):
    return "<h1 style='color:red;'> Error finding route please return to a valid route", 404