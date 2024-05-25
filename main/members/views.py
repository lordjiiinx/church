from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from .serialize import serialize
from .serialization import serialization
from .tasks import password_reset_task
from django.dispatch import receiver
from .seri import serialize2
from rest_framework import generics
from .eveseriarize import eveserialize
from django.db.models import Q
from django_rest_passwordreset.signals import reset_password_token_created

from .models import departments
from .models import events


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

class group(APIView):
    #permission_classes = [IsAuthenticated]
    
    def post(self,request):
        
        class_serializer = serialize2(data=request.data)
        if class_serializer.is_valid():
            newuser = class_serializer.save()
           

        else :
            raise ValueError('not saved')

        if newuser:
            return Response(status=status.HTTP_201_CREATED)
        else :
          return Response(class_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class depart(generics.ListAPIView):


    queryset =departments.objects.all()
    serializer_class = serialization
   # 
    def get_queryset(self):
        member = self.kwargs['member']
        department = self.kwargs['department']
        return departments.objects.filter(Q(member= member,department=department))

class createvent(generics.ListCreateAPIView):
     queryset = events.objects.all()
     serializer_class = eveserialize
     permission_classes = [IsAuthenticated]

class retrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = events.objects.all()
    serializer_class = eveserialize
    permission_classes = [IsAuthenticated]
    
         


class retrieveall(generics.ListAPIView):
    queryset = events.objects.all()
    serializer_class = eveserialize
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        department = self.kwargs['department']
        return events.objects.filter(department=department)
