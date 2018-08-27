# -*- encoding: utf-8 -*-

import flask
from flask import render_template
from app import app


@app.route('/', methods=['GET', 'POST'])
def index():
    # Here we use a class of some kind to represent and validate our
    # client-side form data. For example, WTForms is a library that will
    # handle this for us, and we use a custom LoginForm to validate.
    return render_template('index.html', form=form)

