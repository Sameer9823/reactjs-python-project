from app import app, db
from flask import request, jsonify
from models import Friend

@app.route("/api/friends", methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    return jsonify([friend.to_json() for friend in friends])
