"""Seed file to make sample data for users db."""

from models import User, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# # Add users
zucc = User(first_name='Mark', last_name='Zuckerberg', image_url='https://en.wikipedia.org/wiki/File:Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpg')

# whiskey = Pet(name='Whiskey', species="dog")
# bowser = Pet(name='Bowser', species="dog", hunger=10)
# spike = Pet(name='Spike', species="porcupine")

# # Add new objects to session, so they'll persist
db.session.add(zucc)
# db.session.add(bowser)
# db.session.add(spike)

# Commit--otherwise, this never gets saved!
db.session.commit()
