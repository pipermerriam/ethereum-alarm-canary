import urlparse

from django.conf import settings


_client = None


def get_blockchain_client():
    global _client

    if _client is None:
        parts = urlparse.urlparse(settings.BLOCKCHAIN_CLIENT_URL)

        if parts.scheme == "rpc":
            from eth_rpc_client import Client
            rpc_host, _, rpc_port = parts.netloc.partition(':')
            _client = Client(rpc_host, rpc_port)
        elif parts.scheme == "ethtester":
            from populus.ethtester_client import EthTesterClient
            _client = EthTesterClient()
        else:
            raise ValueError(
                "Must be in the format of `rpc://host:port` or `ethtester://`"
            )
    return _client
