"""
Django settings for canary project.

Generated by 'django-admin startproject' using Django 1.9.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.9/ref/settings/
"""

import os
import excavator as env
import dj_database_url
import django_cache_url

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env.get('DJANGO_SECRET_KEY', required=True)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.get('DJANGO_DEBUG', type=bool, default=True)

ALLOWED_HOSTS = env.get('DJANGO_ALLOWED_HOSTS', type=list, required=not DEBUG)


# Application definition

INSTALLED_APPS = [
    'django.contrib.sessions',
    'django.contrib.staticfiles',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'pipeline',
    'alarm_web.core',
    'alarm_web.apps.canary',
    'alarm_web.apps.explorer',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = env.get('DJANGO_ROOT_URLCONF', required=True)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                "django.template.context_processors.media",
                "django.template.context_processors.static",
                "django.template.context_processors.i18n",
                "django.template.context_processors.tz",
            ],
        },
    },
]


WSGI_APPLICATION = 'alarm_web.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': dj_database_url.parse(env.get('DATABASE_URL', required=True)),
}
DATABASES['default'].setdefault('ATOMIC_REQUESTS', True)

# Cache
CACHES = {
    'default': django_cache_url.config(),
}


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = env.get('DJANGO_STATIC_URL', default='/static/')
STATIC_ROOT = env.get(
    'DJANGO_STATIC_ROOT',
    default=os.path.join(BASE_DIR, 'alarm_web', 'public', 'static'),
)

MEDIA_URL = env.get('DJANGO_MEDIA_URL', default='/media/')
MEDIA_ROOT = env.get(
    'DJANGO_MEDIA_ROOT',
    default=os.path.join(BASE_DIR, 'alarm_web', 'public', 'media'),
)

DEFAULT_FILE_STORAGE = env.get(
    "DJANGO_DEFAULT_FILE_STORAGE",
    default="django.core.files.storage.FileSystemStorage",
)
STATICFILES_STORAGE = env.get(
    "DJANGO_STATICFILES_STORAGE",
    default="pipeline.storage.PipelineCachedStorage",
)

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'alarm_web', 'static'),
    os.path.join(BASE_DIR, 'bower_components'),
)

# Static file finders.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'pipeline.finders.PipelineFinder',
)

# Herokuify
if 'SECURE_PROXY_SSL_HEADER' in os.environ:
    SECURE_PROXY_SSL_HEADER = env.get('SECURE_PROXY_SSL_HEADER', type=list, default=None)

# AWS
AWS_ACCESS_KEY_ID = env.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = env.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = env.get('AWS_STORAGE_BUCKET_NAME')

AWS_REDUCED_REDUNDANCY = True
AWS_QUERYSTRING_AUTH = False
AWS_S3_FILE_OVERWRITE = True
AWS_S3_SECURE_URLS = True
AWS_IS_GZIPPED = False
AWS_PRELOAD_METADATA = True
AWS_HEADERS = {
    "Cache-Control": "public, max-age=86400",
}

DEFAULT_S3_PATH = "media"
STATIC_S3_PATH = "static"

# Django Pipeline Settings
PIPELINE = {
    'STYLESHEETS': {
        'canary': {
            'source_filenames': (
                "css/canary/project.css",
            ),
            'output_filename': 'css/canary.css',
        },
        'explorer': {
            'source_filenames': (
                "css/explorer/project.css",
            ),
            'output_filename': 'css/explorer.css',
        },
        'dependencies': {
            'source_filenames': (
                "bootstrap/dist/css/bootstrap.css",
            ),
            'output_filename': 'css/dependencies.css',
        },
    },
    'JAVASCRIPT': {
        'canary': {
            'source_filenames': (
                "js/canary/config/canary.js",
                "js/canary/actions/*.js",
                "js/canary/stores/*.js",
                "js/canary/components/*.jsx",
                "js/canary/project.js",
            ),
            'output_filename': 'js/canary.js',
        },
        'explorer': {
            'source_filenames': (
                "js/explorer/config/explorer.js",
                "js/explorer/contracts/*.js",
                "js/explorer/actions/*.js",
                "js/explorer/stores/*.js",
                "js/explorer/components/*.jsx",
                "js/explorer/project.js",
            ),
            'output_filename': 'js/explorer.js',
        },
        'dependencies': {
            'source_filenames': (
                "jquery/dist/jquery.js",
                "bootstrap/dist/js/bootstrap.js",
                "react/react.js",
                "react/react-dom.js",
                "immutable/dist/immutable.js",
                "lodash/lodash.js",
                "flux/dist/Flux.js",
                "eventemitter2/lib/eventemitter2.js",
                "blockies/index.js",
                "bignumber.js/bignumber.js",
                "web3/dist/web3.js",
            ),
            'output_filename': 'js/dependencies.js',
        },
    },
    'CSS_COMPRESSOR': 'pipeline.compressors.NoopCompressor',
    'JS_COMPRESSOR': 'pipeline.compressors.NoopCompressor',
    'PIPELINE_ENABLED': env.get('DJANGO_PIPELINE_ENABLED', type=bool, default=not DEBUG),
    'DISABLE_WRAPPER': True,
    'COMPILERS': (
        'react.utils.pipeline.JSXCompiler',
    ),
}

# Blockchain Client
BLOCKCHAIN_CLIENT_URL = env.get(
    'BLOCKCHAIN_CLIENT_URL',
    default="rpc://127.0.0.1:8545",
)

# Canary Contract Addresses
CANARY_CONTRACT_ADDRESSES = env.get(
    'CANARY_CONTRACT_ADDRESSES',
    type=list,
    default=(
        '0xe6d67a9f41b820072cd0764117792691f6112eec,'
        '0x675e2c143295b8683b5aed421329c4df85f91b33'
    )
)

# Rest Framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': tuple(),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'TEST_REQUEST_DEFAULT_FORMAT': 'json',
}
