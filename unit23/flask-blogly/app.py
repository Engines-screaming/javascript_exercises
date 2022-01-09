"""Blogly application."""

from flask import Flask, render_template
from models import db, connect_db, User
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "VERYSECRETKEY!"
app.config['SQLALCHEMY_ECHO'] = True

debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home():
    users = User.query.all()
    return render_template('list.html', users=users)


@app.route('/user/<int:user_id>')
def show_details(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('details.html', user=user)
