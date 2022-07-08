from django.contrib import admin
from .models import Profile,User_Attendance,Leave
# Register your models here.
admin.site.register(Profile)
admin.site.register(User_Attendance)
admin.site.register(Leave)
