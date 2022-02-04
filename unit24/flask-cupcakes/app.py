"""Flask app for Cupcakes"""

from flask import Flask, render_template, redirect, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake


app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///cupcakes"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/api/cupcakes')
def list_cupcakes():
    cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify({'cupcakes': cupcakes})

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    cupcake_dict = {
        # 'id': request.json['id'],
        'flavor': request.json['flavor'],
        'size': request.json['size'],
        'rating': request.json['rating'],
        'image': request.json['image']
    }

    cupcake = Cupcake(**cupcake_dict)
    db.session.add(cupcake)
    db.session.commit()
    return (jsonify({'cupcake': cupcake.serialize()}), 201)

@app.route('/api/cupcakes/<int:cupcake_id>')
def cupcake_details(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify({'cupcake': cupcake.serialize()})


