from django.conf import settings
from django.http import Http404

from rest_framework import generics
from rest_framework import response

from alarm_web.blockchain_client import get_blockchain_client

from alarm_web.apps.canary.contracts import Canary
from alarm_web.apps.canary.serializers import CanarySerializer


class CanaryListAPIView(generics.ListAPIView):
    def get(self, *args, **kwargs):
        return response.Response({
            'results': settings.CANARY_CONTRACT_ADDRESSES,
            'next': None,
            'previous': None,
            'count': len(settings.CANARY_CONTRACT_ADDRESSES),
        })


class CanaryRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = CanarySerializer

    def get_object(self):
        client = get_blockchain_client()
        canary_address = self.kwargs['address']
        if len(client.get_code(canary_address)) <= 2:
            raise Http404
        canary = Canary(canary_address, client)
        return canary
