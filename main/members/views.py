from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from rest_framework import generics
from .models import newuser
from .serialize import serialize
from .tasks import password_reset_task
from django.dispatch import receiver



from django_rest_passwordreset.signals import reset_password_token_created


from django.http import HttpResponse,HttpRequest

from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@receiver(reset_password_token_created)
def sendemail(sender, instance, reset_password_token, *args, **kwargs):
    return password_reset_task(sender, instance, reset_password_token, *args, **kwargs)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name,
        token['email']= user.email,
        token['is_staff']= user.is_staff,
        token['groupss'] = user.groupss,


        # ...

        return token
class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class usercreate(APIView):
    

    def post(self,request):
        
        class_serializer = serialize(data=request.data)
        if class_serializer.is_valid():
            newuser = class_serializer.save()
           

        else :
            raise ValueError('not saved')

        if newuser:
            return Response(status=status.HTTP_201_CREATED)
        else :
          return Response(class_serializer.errors,status=status.HTTP_400_BAD_REQUEST)