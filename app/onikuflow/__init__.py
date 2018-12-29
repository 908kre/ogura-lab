#!/usr/bin/env python
# -*- coding: utf-8 -*-
from .view import api_bp
from .encoders import DefaultEncoder
from flask import Flask
import logging

logging.basicConfig(
    format='%(asctime)s %(levelname)-8s %(message)s',
)
logger = logging.getLogger(__name__)
logger.setLevel(level=logging.DEBUG)


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_envvar('ONIKUFLOW_CONFIG_FILE_PATH')
    app.json_encoder = DefaultEncoder
    app.register_blueprint(api_bp)
    return app
