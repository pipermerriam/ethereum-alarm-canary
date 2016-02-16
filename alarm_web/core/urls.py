from django.views.generic import TemplateView
from django.conf.urls import (
    url,
    include,
)


urlpatterns = [
    url(
        r'^$', TemplateView.as_view(template_name='home.html'),
        name="index",
    ),
    url(
        r'^canary/', include('alarm_web.apps.canary.urls', namespace="canary"),
    ),
    url(
        r'^explorer/', include('alarm_web.apps.explorer.urls', namespace="explorer"),
    ),
]
