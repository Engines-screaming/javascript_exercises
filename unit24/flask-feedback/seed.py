from app import app
from models import db, User, Feedback


db.drop_all()
db.create_all()

user1 = User(
    first_name='test',
    last_name='1',
    username='test1',
    password='test1',
    email='test@email.com'
)

feedback1 = Feedback(
    id='1',
    title='testfeedback',
    content='feedback',
    username='test1'
)

db.session.add(user1)
db.session.commit()

db.session.feedback(feedback1)
db.session.commit()