from django.views.generic import TemplateView
from django.conf.urls import url

from alarm_web.apps.canary.views import (
    CanaryRetrieveAPIView,
    CanaryListAPIView,
)


urlpatterns = [
    url(
        r'^$', TemplateView.as_view(template_name='canary/index.html'),
        name="index",
    ),
    url(
        r'^api/canaries/$',
        CanaryListAPIView.as_view(),
        name="canary-list",
    ),
    url(
        r'^api/canaries/(?P<address>(?:0x)?[a-fA-F0-9]{40})/$',
        CanaryRetrieveAPIView.as_view(),
        name="canary-detail",
    )
]
