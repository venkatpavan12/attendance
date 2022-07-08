
import email
from email import message
import profile
from urllib import response
from django.http import JsonResponse
from django.shortcuts import render
from requests import request
from attendance.settings import EMAIL_HOST_USER

from attendanceapi.models import Profile,User_Attendance,Leave
from attendanceapi.serializers import ProfileSerializer,AttendanceSerializer,LeaveSerializer,UserDetailSerialiser,CurrentUserSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from rest_framework import status
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated,AllowAny,IsAdminUser
from django.core.mail import send_mail
from rest_framework.decorators import permission_classes,api_view
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt,ensure_csrf_cookie,csrf_protect
from django.utils.decorators import method_decorator
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from decouple import config,Csv
# Create your views here.

class ProfileView(mixins.RetrieveModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
    permission_classes=[IsAuthenticated]
    def get(self,request):
        userprofile=Profile.objects.filter(user=request.user).first()
        serializer=ProfileSerializer(userprofile)
        return Response(serializer.data)
    def post(self,request):
        context = {
            "request": self.request,
        }
        serializer=ProfileSerializer(data=request.data,context=context)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AttendanceView(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    serializer_class=AttendanceSerializer
    queryset=User_Attendance.objects.all()
    permission_classes = [IsAuthenticated]
    def get(self,request):
        queryset=User_Attendance.objects.filter(user=request.user)
        serializer=AttendanceSerializer(queryset,many=True)
        return Response(serializer.data)
    def post(self,request):
        context = {
            "request": self.request,
        }
        serializer=AttendanceSerializer(data=request.data,context=context)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LeaveView(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    serializer_class=LeaveSerializer
    queryset=Leave.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self,request):
        queryset=Leave.objects.filter(user=request.user)
        serializer=LeaveSerializer(queryset,many=True)
        return Response(serializer.data)
    def post(self,request):
        context = {
            "request": self.request,
        }
        serializer=LeaveSerializer(data=request.data,context=context)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





class ProfileDetailView(generics.GenericAPIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        context = {
            "request": self.request,
        }
        user=User.objects.filter(id=request.user.id).first()
        profile=Profile.objects.filter(user=request.user).first()
        attendance=User_Attendance.objects.filter(user=request.user).values('date').distinct().count()
        leaves=Leave.objects.filter(user=request.user).count()
        userserializer=CurrentUserSerializer(user,context=context)
        profileserializer=ProfileSerializer(profile,context=context)
        response={**userserializer.data,**profileserializer.data,"attendance":attendance,"leaves":leaves}
        return Response(response)

class AdminProfileDetailView(generics.GenericAPIView):
    permission_classes=[IsAuthenticated]
    def get(self,request,id):
        context = {
            "request": self.request,
        }
        user=User.objects.filter(id=id).first()
        profile=Profile.objects.filter(user=self.kwargs['id']).first()
        attendance=User_Attendance.objects.filter(user=self.kwargs['id']).values('date').distinct().count()
        leaves=Leave.objects.filter(user=self.kwargs['id']).count()
        userserializer=CurrentUserSerializer(user,context=context)
        profileserializer=ProfileSerializer(profile,context=context)
        response={**userserializer.data,**profileserializer.data,"attendance":attendance,"leaves":leaves}
        return Response(response)

class ProfileListDetailView(generics.GenericAPIView):
    permission_classes=[IsAdminUser]
    queryset=User.objects.select_related('profile').all()
    def get(self,request):
        context = {
            "request": self.request,
        }
        query_set=User.objects.filter(is_staff=False).select_related('profile').prefetch_related('attendance').all()
        userserializer=UserDetailSerialiser(query_set,context=context,many=True)
        return Response(userserializer.data)

class MailView( APIView):
    permission_classes = [AllowAny]
    def post(self,request):
        data=request.data
        name=data['name']
        email=data['email']
        message=data['message']
        print(name,email,message)
        recpients_list=config("EMAIL_RECV_LIST",cast=Csv())
        send_mail("From: "+name+" "+email,message,EMAIL_HOST_USER,recpients_list,fail_silently=False)
        return Response({"status":"success"})
