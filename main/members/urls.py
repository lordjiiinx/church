from django.urls import path
from .views import usercreate,group







urlpatterns = [
    path("signin", usercreate.as_view()),
    path("join/", group.as_view()),
    
    

]