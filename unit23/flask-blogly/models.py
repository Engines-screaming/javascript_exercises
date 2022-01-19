"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):

    __tablename__ = "user"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    first_name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    last_name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    image_url = db.Column(db.String(300), nullable=True)

    def __repr__(self):
        """Show info about user."""
        return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, img_url: {self.image_url}"


class Post(db.Model):

    __tablename__ = "post"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String)
    content = db.Column(db.String)
    created_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    user = db.relationship('User', backref='posts')
    tags = db.relationship('Tag', secondary='posttag', backref='posts')


class PostTag(db.Model):
    
    __tablename__ = "posttag"

    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tag.id'), primary_key=True)

    tags = db.relationship('Tag', backref='posttag')
    post = db.relationship('Post', backref='posttag')


class Tag(db.Model):

    __tablename__ = "tag"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, unique=True)
