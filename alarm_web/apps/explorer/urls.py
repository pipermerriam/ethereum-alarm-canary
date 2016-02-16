from django.views.generic import TemplateView
from django.conf.urls import url

from alarm_web.apps.explorer.views import (
    FutureBlockCallRetrieveAPIView,
)


urlpatterns = [
    url(
        r'^$', TemplateView.as_view(template_name='index.html'),
        name="index",
    ),
    url(
        r'^api/future-block-calls/(?P<address>(?:0x)?[a-fA-F0-9]{40})/$',
        FutureBlockCallRetrieveAPIView.as_view(),
        name="future-block-call-detail",
    )
]