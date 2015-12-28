from rest_framework import generics

from eth_rpc_client import Client

from canary.serializers import CanarySerializer
from canary.contracts import Canary


client = Client('127.0.0.1', '8545')


class CanaryRetrieveAPIView(generics.GenericAPIView):
    serializer_class = CanarySerializer

    def get_object(self):
        canary_address = self.kwargs['address']
        canary = Canary(canary_address, client)
        return canary
