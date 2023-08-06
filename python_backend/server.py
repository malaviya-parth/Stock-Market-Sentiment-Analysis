from flask import Flask, jsonify
from prediction import json_data, res

app = Flask(__name__)

@app.route('/data')
def get_data():

    return  jsonify(res)

if __name__ == '__main__':
    app.run(debug=True)