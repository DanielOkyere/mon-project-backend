from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from sqlalchemy import create_engine

app = Flask(__name__)

engine = create_engine('postgres://hbruthzn:JTMtIYd0DNPCV5XOBoYiCCggOPtqGq9k@chunee.db.elephantsql.com/hbruthzn')
app.config['SECRET_KEY'] = '9c2448b38a760101b3d40932'
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

from src import models
from src import routes