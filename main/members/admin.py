from django.contrib import admin
from .models import newuser
from .department.models import departments,events


@admin.register(newuser)
class newuseradmin(admin.ModelAdmin):
    pass