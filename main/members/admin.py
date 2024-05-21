from django.contrib import admin
from .models import newuser,departments,events



@admin.register(newuser,departments,events)
class newuseradmin(admin.ModelAdmin):
    pass