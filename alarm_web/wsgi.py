"""
WSGI config for canary project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os
import dotenv

PROJECT_PATH = os.path.dirname(os.path.dirname(__file__))

dotenv.load_dotenv(os.path.join(PROJECT_PATH, ".env"))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "alarm_web.settings")

application = get_wsgi_application()
