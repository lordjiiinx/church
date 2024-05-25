from django.urls import path
from .views import usercreate,group,depart,createvent,retrieve,retrieveall







urlpatterns = [
    path("signin", usercreate.as_view()),
    path("join/", group.as_view()),
    path('depart/<member>/<department>', depart.as_view(), name='texts'),
    
      path("eventpost/", createvent.as_view()),

      path("retrieve/<pk>", retrieve.as_view()),
       path("retrieveall/<department>", retrieveall.as_view()),

]