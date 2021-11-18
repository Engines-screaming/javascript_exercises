from flask import Flask, render_template, request, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


# survey variables
responses = []

@app.route('/')
def homepage():
    return render_template('survey.html',
                            survey_title=satisfaction_survey.title,
                            instructions=satisfaction_survey.instructions)

@app.route('/question/<int:question_num>')
def survey_question(question_num):
    '''renders the question and choices given an index'''

    q = satisfaction_survey.questions[question_num]
    c = q.choices
    
    # if questions are accessed out of order, redirect to the last question that needs an answer
    if len(responses) != question_num:
        return redirect(f'/question/{len(responses)}')
    else:
        return render_template('question.html', 
                                question_num=question_num, 
                                question=q.question,
                                next_question_num=question_num + 1,
                                choices=c)


@app.route('/answer')
def submit_question():
    '''Stores survey answers and redirects to the next question'''
    a = request.args.get('answer')
    responses.append(a)

    # check if theres more questions, and redirect if there are
    if len(satisfaction_survey.questions) == len(responses):
        return render_template('finish.html')
    else:
        return redirect(f'/question/{len(responses)}')