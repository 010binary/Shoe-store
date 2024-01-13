from flask import Flask, render_template

app = Flask(__name__)

"""
Function for routes
"""


@app.errorhandler(404)
def error(error):
    return "<h1 style='color:red;'> Error finding route please return to a valid route", 404


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


@app.route("/shop")
def shop():
    return render_template("shop.html")


if __name__ == "__main__":
    app.run(debug=True)
