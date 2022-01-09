"""Seed file to make sample data for users db."""

from models import User, db
from app import app

# if exists drop and create
db.drop_all()
db.create_all()

User.query.delete()

# create users
zucc = User(first_name='Mark', last_name='Zuckerberg', image_url='https://en.wikipedia.org/wiki/File:Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpg')
lebron = User(first_name='LeBron', last_name='James', image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LeBron_James_crop.jpg/220px-LeBron_James_crop.jpg')
jack = User(first_name='Jack', last_name='Black', image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Jack_Black_2011_2.jpg/340px-Jack_Black_2011_2.jpg')

# Add new objects to session
db.session.add(zucc)
db.session.add(lebron)
db.session.add(jack)

db.session.commit()
