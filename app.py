from flask import Flask
from flask import render_template

from flask import Flask as _Flask,jsonify
from flask import request
from flask import render_template
from flask.json import JSONEncoder as _JSONEncoder

import decimal
import util
import string

class JSONEncoder(_JSONEncoder):
        def default(self, o):
            if isinstance(o, decimal.Decimal):
                return float(o)
            super(_JSONEncoder, self).default(o)

class Flask(_Flask):
    json_encoder = JSONEncoder

app = Flask(__name__)

@app.route('/')
def hello_word3():
    return render_template("index.html")

@app.route('/l1')
def get_l1_data():
    data = util.get_l1_data()
    return jsonify({"value":data})

@app.route('/l2')
def get_l2_data():
    data = util.get_l2_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/r1')
def get_r1_data():
    data = util.get_r1_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/r2')
def get_r2_data():
    data = util.get_r2_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/l21')
def get_l21_data():
    data = util.get_l21_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/l22')
def get_l22_data():
    data = util.get_l22_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/r21')
def get_r21_data():
    data = util.get_r21_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/r22')
def get_r22_data():
    data = util.get_r22_data()
    nums = []
    for a in data:
        nums.append(a)
    return jsonify({"value":nums})

@app.route('/l31')
def get_l31_data():
    data = util.get_l31_data()
    east=data[0]
    center=data[1]
    west = data[2]
    northeast=data[3]
    return jsonify({"east":east,"center":center,"west":west,"northeast":northeast})

@app.route('/l32')
def get_l32_data():
    data = util.get_l32_data()
    Jan=data[0]
    Feb=data[1]
    Mar=data[2]
    Apr=data[3]
    May=data[4]
    June=data[5]
    July=data[6]
    Aug=data[7]
    Sep=data[8]
    Oct=data[9]
    Nov=data[10]
    Dec=data[11]
    return jsonify({"Jan":Jan,"Feb":Feb,"Mar":Mar,"Apr":Apr,"May":May,"June":June,"July":July,"Aug":Aug,"Sep":Sep,"Oct":Oct,"Nov":Nov,"Dec":Dec})

@app.route('/c31')
def get_c31_data():
    data = util.get_c31_data()
    east=data[0]
    center=data[1]
    west = data[2]
    northeast=data[3]
    return jsonify({"east":east,"center":center,"west":west,"northeast":northeast})

@app.route('/c32')
def get_c32_data():
    data = util.get_c32_data()
    Jan=data[0]
    Feb=data[1]
    Mar=data[2]
    Apr=data[3]
    May=data[4]
    June=data[5]
    July=data[6]
    Aug=data[7]
    Sep=data[8]
    Oct=data[9]
    Nov=data[10]
    Dec=data[11]
    return jsonify({"Jan":Jan,"Feb":Feb,"Mar":Mar,"Apr":Apr,"May":May,"June":June,"July":July,"Aug":Aug,"Sep":Sep,"Oct":Oct,"Nov":Nov,"Dec":Dec})

@app.route('/r31')
def get_r31_data():
    data = util.get_r31_data()
    east=data[0]
    center=data[1]
    west = data[2]
    northeast=data[3]
    return jsonify({"east":east,"center":center,"west":west,"northeast":northeast})

@app.route('/r32')
def get_r32_data():
    data = util.get_r32_data()
    Jan=data[0]
    Feb=data[1]
    Mar=data[2]
    Apr=data[3]
    May=data[4]
    June=data[5]
    July=data[6]
    Aug=data[7]
    Sep=data[8]
    Oct=data[9]
    Nov=data[10]
    Dec=data[11]
    return jsonify({"Jan":Jan,"Feb":Feb,"Mar":Mar,"Apr":Apr,"May":May,"June":June,"July":July,"Aug":Aug,"Sep":Sep,"Oct":Oct,"Nov":Nov,"Dec":Dec})

if __name__ == '__main__':
    app.run()
