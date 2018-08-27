# -*- encoding: utf-8 -*-


class Config(object):
    """
    Configuration base, for all environments.
    """
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'sqlite:///application.db'
    BOOTSTRAP_FONTAWESOME = True
    CSRF_ENABLED = True


class ProductionConfig(Config):
    DATABASE_URI = 'mysql://user@localhost/foo'


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
