from flask import Flask, render_template, request, redirect
from surveys import satisfaction_survey


app = Flask(__name__)


# survey variables
responses = []

@app.route('/')
def homepage():
    return render_template('survey.html', instructions=satisfaction_survey.instructions)

@app.route('/question/<int:question_num>')
def survey_question(question_num):
    q = satisfaction_survey.questions[question_num]
    c = q.choices[question_num]
    return render_template('question.html', question_num=question_num, question=q.question)



# @app.route('/submit_question')
# def submit_question():
#     '''Stores survey answers and redirects to the next question'''
    
    
