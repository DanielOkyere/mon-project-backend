from crypt import methods
from http.client import OK
import json
from urllib import request
from src.models import User
import json
from flask_login import login_user, logout_user

@app.route("/", methods=['GET'])
def home_page():
    if request.method == 'GET':
        return {
            "message": "Sorry you have hit a roadblock"
        }
    return {
        "message": "Please you cannnot access this server this way"
    }