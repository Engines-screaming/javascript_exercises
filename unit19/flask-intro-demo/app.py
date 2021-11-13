from flask import Flask, request

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    return "HELLO THERE GENERAL KENOBI"

@app.route('/search')
def return_search():
    term = request.args['term']
    sort = request.args['sort']

    return f"""
    <html>
    <body>
      <p>You searched for term={term} and sort={sort}
    </body>
    </html>
    """