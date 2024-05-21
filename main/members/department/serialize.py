from .models import departments
from rest_framework import serializers

from .tasks import send_email_task2
from django.db.models import Q
from django.conf import settings
from  ..models import newuser


class serialize2(serializers.ModelSerializer):
   
    
    class Meta:
        model = departments
        fields = '__all__'

    def create(self, validated_data):
       instance = self.Meta.model(**validated_data)
       mail = newuser.objects.filter(Q(groupss= instance.group , is_staff=1)).values_list('email',flat=True)
       mademail=mail[0]

       
       
       send_email_task2(mademail,instance.department,instance.joined_date,instance.name)

       instance.save()
       return instance
       
