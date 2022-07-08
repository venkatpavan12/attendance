from dataclasses import fields
from datetime import datetime
from email.policy import default
from logging import raiseExceptions
from urllib import response
from djoser.serializers import UserSerializer as BaseUserSerializer
from httplib2 import Response
from attendanceapi.models import Profile,User_Attendance,Leave
from rest_framework.decorators import action
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.utils import timezone
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    permission_classes=[IsAuthenticated]
    class Meta:
        model=Profile
        fields=['id','user','internid','tmnemailid','internship_year','contact_number','team','department','gender','description','photo']


    @action(detail=False,methods=['GET','PUT'])
    def me(self,request):
        profile,created=Profile.objects.get_or_create(user=request.user.id)
        if request.method=='GET':
            serializer=ProfileSerializer(profile)
            return response(serializer.data)
        elif request.method=='PUT':
            serializer=ProfileSerializer(profile,data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

class AttendanceSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    time=serializers.TimeField(read_only=True,input_formats=["hh:mm:ss"],default=datetime.now().time())
    permission_classes=[IsAuthenticated]
    class Meta:
        model=User_Attendance
        fields=['user','date','type','time']
class LeaveSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    permission_classes=[IsAuthenticated]
    class Meta:
        model=Leave
        fields=['user','startdate','enddate','reason']


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username','email','profile']
class UserDetailSerialiser(serializers.Serializer):
    id=serializers.IntegerField()
    username=serializers.CharField(max_length=255)
    email=serializers.EmailField()
    team=serializers.SerializerMethodField(method_name='getTeam')
    attendance=serializers.SerializerMethodField(method_name='getAttendance')
    description=serializers.SerializerMethodField(method_name='getDescription')
    photo=serializers.SerializerMethodField(method_name='getPhoto')
    def getAttendance(self,object):
        return object.attendance.count()
    def getTeam(self,object):
        return  object.profile.team if hasattr(object, 'profile') else 0
    def getDescription(self,object):
        return object.profile.description if hasattr(object, 'profile') else ""
    def getPhoto(self,object):
        return object.profile.photo.url if hasattr(object, 'profile') else ""
    


