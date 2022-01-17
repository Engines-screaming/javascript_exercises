"""Blogly application."""

from flask import Flask, render_template, request, redirect
from models import db, connect_db, User, Post, Tag, PostTag
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


@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    user_id = post.user.id  # to redirect back to the user's posts
    db.session.delete(post)
    db.session.commit()
    return redirect(f'/users/{user_id}')


@app.route('/posts/<int:post_id>/edit', methods=['GET'])
def edit_post_page(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('edit_post.html', post=post)


@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    post.title = request.form["title"]
    post.content = request.form["content"]
    db.session.commit()
    return redirect(f'/posts/{post_id}')


@app.route('/tags')
def show_tag():
    tags = Tag.query.order_by('name').all()
    return render_template('tags.html', tags=tags)


@app.route('/tags/new', methods=['GET'])
def add_tags_page():
    return render_template('add_tag.html')


@app.route('/tags/new', methods=['POST'])
def add_tag():
    new_tag = Tag(name=request.form['name'])
    db.session.add(new_tag)
    db.session.commit()
    return redirect('/tags')


@app.route('/tags/<int:tag_id>')
def show_tag_details(tag_id):
    modified_tag = Tag.query.get_or_404(tag_id)
    return render_template('tag_details.html', tag=modified_tag)


@app.route('/tags/<int:tag_id>/edit', methods=['GET'])
def edit_tag_page(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('edit_tag.html', tag=tag)


@app.route('/tags/<int:tag_id>/edit', methods=['POST'])
def edit_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    tag.name = request.form['name']
    db.session.commit()
    return redirect('/tags')