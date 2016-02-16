from rest_framework import serializers


class ConstantFunctionField(serializers.Field):
    def __init__(self, func_name, *args, **kwargs):
        self.func_name = func_name
        kwargs['source'] = '*'
        kwargs['read_only'] = True
        super(ConstantFunctionField, self).__init__(*args, **kwargs)

    def to_representation(self, obj):
        return getattr(obj, self.func_name)()


class FutureBlockCallSerializer(serializers.Serializer):
    address = serializers.CharField(source="_meta.address")

    contract_address = ConstantFunctionField('contractAddress')
    scheduler_address = ConstantFunctionField('schedulerAddress')

    claimer = ConstantFunctionField('claimer')
    claimer_deposit = ConstantFunctionField('claimerDeposit')
    claim_amount = ConstantFunctionField('claimAmount')

    target_block = ConstantFunctionField('targetBlock')
    grace_period = ConstantFunctionField('gracePeriod')

    anchor_gas_Price = ConstantFunctionField('anchorGasPrice')
    suggested_gas = ConstantFunctionField('suggestedGas')

    base_payment = ConstantFunctionField('basePayment')
    base_fee = ConstantFunctionField('baseFee')

    abi_signature = ConstantFunctionField('abiSignature')

    was_successful = ConstantFunctionField('wasSuccessful')
    was_called = ConstantFunctionField('wasCalled')
    is_cancelled = ConstantFunctionField('isCancelled')
