# -*- encoding: utf-8 -*-

from flask import Flask
from app.database import db_session, init_db
from app.models import User

app = Flask(__name__)

#Configuration of application, see configuration.py, choose one and uncomment.
#app.config.from_object('configuration.ProductionConfig')
app.config.from_object('app.configuration.DevelopmentConfig')
#app.config.from_object('configuration.TestingConfig')

init_db()


app.config['TESTING'] = True

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

from app import views, models
