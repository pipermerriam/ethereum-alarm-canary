import os


os.environ['DJANGO_SECRET_KEY'] = 'test-secret-key'
os.environ['DATABASE_URL'] = 'sqlite:///db.sqlite'
os.environ['BLOCKCHAIN_CLIENT_URL'] = 'ethtester://'


from .settings import *
