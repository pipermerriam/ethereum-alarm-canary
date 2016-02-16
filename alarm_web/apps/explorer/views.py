from django.http import Http404

from rest_framework import generics

from alarm_web.blockchain_client import get_blockchain_client

from alarm_web.apps.explorer.contracts import FutureBlockCall
from alarm_web.apps.explorer.serializers import FutureBlockCallSerializer


class FutureBlockCallRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = FutureBlockCallSerializer

    def get_object(self):
        client = get_blockchain_client()
        future_block_call_address = self.kwargs['address']
        if len(client.get_code(future_block_call_address)) <= 2:
            raise Http404
        future_block_call = FutureBlockCall(future_block_call_address, client)
        return future_block_call
