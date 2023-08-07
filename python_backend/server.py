from flask import Flask, jsonify
from flask_cors import CORS
from prediction import wholeTask

result = wholeTask()

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_data():

    return  jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)