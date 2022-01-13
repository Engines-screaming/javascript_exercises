"""Blogly application."""

from flask import Flask, render_template, request, redirect
from models import db, connect_db, User, Post
from flask_debugtoolbar import DebugToolbarExtension
import datetime


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
    return redirect('/users')


@app.route('/users/new', methods=['GET'])
def new_user_page():
    return render_template('new.html')


@app.route('/users/new', methods=['POST'])
def submit_new_user():
    db.session.add(User(first_name=request.form["first_name"],
                        last_name=request.form["last_name"],
                        image_url=request.form["image_url"]))
    db.session.commit()
    return redirect('/users')


@app.route('/users/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/users')


@app.route('/posts/<int:post_id>')
def show_post(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('post.html', post=post)


@app.route('/users/<int:user_id>/posts/new', methods=['GET'])
def new_form_page(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('new_post.html', user=user)


@app.route('/users/<int:user_id>/posts/new', methods=['POST'])
def add_new_post(user_id):
    # user = User.query.get_or_404(user_id)
    new_post = Post(title=request.form['title'],
                    content=request.form['content'],
                    created_at=datetime.datetime.now(),
                    user_id=user_id
                   )
                   
    db.session.add(new_post)
    db.session.commit()
    return redirect(f'/users/{user_id}')