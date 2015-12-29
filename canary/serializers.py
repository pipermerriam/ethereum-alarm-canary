from rest_framework import serializers


class ConstantFunctionField(serializers.Field):
    def __init__(self, func_name, *args, **kwargs):
        self.func_name = func_name
        kwargs['source'] = '*'
        kwargs['read_only'] = True
        super(ConstantFunctionField, self).__init__(*args, **kwargs)

    def to_representation(self, obj):
        return getattr(obj, self.func_name)()


class CanarySerializer(serializers.Serializer):
    is_alive = ConstantFunctionField('isAlive')
    heartbeat_count = ConstantFunctionField('heartbeatCount')
