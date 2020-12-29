from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)




@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        firstword = request.form['firstword']
        return 'The ' + firstword + ' punched him!'


    else:
        return render_template('madlib1.html')

if __name__ == "__main__":
    app.run(debug=True)