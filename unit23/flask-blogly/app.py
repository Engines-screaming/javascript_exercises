"""Blogly application."""

from flask import Flask, render_template, request, redirect
from models import db, connect_db, User
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)
app.config['SECRET_KEY'] = "VERYSECRETKEY!"


# sqlalchemy settings
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True


# Toolbar stuff
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


# init db connection
connect_db(app)


# routes
@app.route('/')
@app.route('/users')
def home():
    users = User.query.all()
    return render_template('list.html', users=users)


@app.route('/users/<int:user_id>')
def show_details(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('details.html', user=user)


@app.route('/users/<int:user_id>/edit', methods=['GET'])
def edit_page(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/users/<int:user_id>/edit', methods=['POST'])
def update_user_and_redirect(user_id):
    user = User.query.get_or_404(user_id)

    # update values
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.image_url = request.form['image_url']
 
    # commit changes and redirect to details page
    db.session.commit()
    return redirect(f'/users')

@app.route('/users/new', methods=['GET'])
def new_user_page():
    return render_template('new.html')