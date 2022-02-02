"""Flask app for Cupcakes"""

from flask import Flask, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake


app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///cupcakes"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

debug = DebugToolbarExtension(app)

connect_db(app)
