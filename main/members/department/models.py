from django.db import models
from django.conf import settings
from datetime import datetime

class departments(models.Model):
  member =models.ForeignKey(settings.AUTH_USER_MODEL,on_delete = models.CASCADE)
  department = models.CharField(max_length=255)
  joined_date = models.DateTimeField(default=datetime.now)
  name = models.CharField(max_length=120)
  group = models.CharField(max_length=120)
 
class events(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    event = models.CharField(max_length=120)
    department = models.CharField(max_length=120)



  

  
  

# Create your models here.
