from django.urls import path
from .views import usercreate
from .department.views import join






urlpatterns = [
    path("signin", usercreate.as_view()),
    path("join/", join.as_view()),
    
    

]