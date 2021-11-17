from flask import Flask, render_template
from surveys import satisfaction_survey


app = Flask(__name__)


# survey variables
responses = []

@app.route('/')
def homepage():
    return render_template('survey.html', instructions=satisfaction_survey.instructions)

# @app.route('/question/<int: question_num>')
# def survey_question(question_num):
#     pass
