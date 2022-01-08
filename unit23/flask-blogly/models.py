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

    image_url = db.Column(db.String(30), nullable=True)

    def __repr__(self):
        """Show info about user."""
        return f"id: {self.id}, first_name: {self.first_name}, last_name: {self.last_name}, img_url: {self.image_url}"
