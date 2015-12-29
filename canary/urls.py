from django.views.generic import TemplateView
from django.conf.urls import url

from canary.views import CanaryRetrieveAPIView


urlpatterns = [
    url(
        r'^$', TemplateView.as_view(template_name='home.html'),
        name="site-index",
    ),
    url(
        r'^api/canaries/(?P<address>(?:0x)?[a-fA-F0-9]{40})/$',
        CanaryRetrieveAPIView.as_view(),
        name="canary-detail",
    )
]
