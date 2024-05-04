from django.contrib import admin
from .models import newuser


@admin.register(newuser)
class newuseradmin(admin.ModelAdmin):
    pass