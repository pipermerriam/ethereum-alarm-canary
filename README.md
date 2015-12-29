# Setup

* `pip install -r requirements.txt`
* `bower install`


# Environment Configuration

* `DJANGO_SECRET_KEY`: required
* `DJANGO_DEBUG`: default: `True`
* `DJANGO_ALLOWED_HOSTS`: required for `DEBUG=False`
* `DJANGO_PIPELINE_ENABLED`: default `True`
* `DJANGO_DEFAULT_FILE_STORAGE`: default `django.core.files.storage.FileSystemStorage`
* `DJANGO_STATICFILES_STORAGE`: default `django.contrib.staticfiles.storage.StaticFilesStorage`
* `DJANGO_MEDIA_ROOT`: default: `canary/public/media/`
* `DJANGO_MEDIA_URL`: default: `/media/`
* `DJANGO_STATIC_ROOT`: default: `canary/public/static/`
* `DJANGO_STATIC_URL`: default: `/static/`
* `DATABASES`: dj-database-url
* `ATOMIC_REQUESTS`: default: `True`
* `SECURE_PROXY_SSL_HEADER`: Needed for reverse proxy setups.

AWS

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_STORAGE_BUCKET_NAME`
