from rest_framework import serializers
from .models import newuser



class serialize(serializers.ModelSerializer):
    class Meta:
        model = newuser
        fields = ['id', 'name', 'email', 'password']
        
    def create(self, validated_data):
        password = validated_data.pop("password")
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            
        
        instance.save()

        return instance