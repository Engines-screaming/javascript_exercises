# Put your app in here.
from flask import Flask, request

from operations import add, sub, mult, div


app = Flask(__name__)


@app.route('/<operation>')
@app.route('/math/<operation>')
def calculate(operation):
    b = int(request.args['b'])
    a = int(request.args['a'])
    
    if operation == 'add':
        answer = add(a, b)
    elif operation == 'sub':
        answer = sub(a, b)
    elif operation == 'mult':
        answer = mult(a, b)
    elif operation == 'div':
        answer = div(a, b)
    
    return str(answer)
