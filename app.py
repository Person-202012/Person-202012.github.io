from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)




@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        firstword = request.form['firstword']
        secondword = request.form['secondword']
        thirdword = request.form['thirdword']
        fourthword = request.form['fourthword']
        fifthword = request.form['fifthword']
        sixthword = request.form['sixthword']
        seventhword = request.form['seventhword']
        eighthword = request.form['eighthword']
        ninthword = request.form['ninthword']
        tenthword = request.form['tenthword']
        eleventhword = request.form['eleventhword']
        twelvethword = request.form['twelvethword']
        return 'The charge against me is a ' + firstword +' with one ' + secondword + ' for purposes of improper ' + thirdword + ' speculation. My real crime is an ' + fourthword + ' ' + fifthword + ' with his ' + sixthword + ', for a ' + seventhword + ' time with his privity and ' + eighthword + ', if not originally brought on by a combination between the ' + ninthword + ' and ' + tenthword + ' with the design to ' + eleventhword + ' ' + twelvethword +' from me.'


    else:
        return render_template('madlib1.html')

if __name__ == "__main__":
    app.run(debug=True)