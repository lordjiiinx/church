
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)
from members.views import MyTokenObtainView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('members.urls')),
     path('api/token/', MyTokenObtainView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
