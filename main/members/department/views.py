from django.shortcuts import render
from .serialize import serialize
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class join(generics.ListCreateAPIView):
     permission_classes = [IsAuthenticated]

    
    

     def post(self,request):
          class_serializer = serialize(data=request.data)
          if class_serializer.is_valid():
            newmember = class_serializer.save()
           

          else :
            raise ValueError('not saved')

          if  newmember :
            return Response(status=status.HTTP_201_CREATED)
          else :
            return Response(class_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
