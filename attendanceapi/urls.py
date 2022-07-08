
from django.urls import path,include
from .views import ProfileView,AttendanceView,LeaveView,MailView,ProfileDetailView,ProfileListDetailView,AdminProfileDetailView


urlpatterns = [
    path('get-profile/<int:id>', AdminProfileDetailView.as_view()),
    path('profile-detail/', ProfileDetailView.as_view()),
    path('profile-detail-list/', ProfileListDetailView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('attendance/', AttendanceView.as_view()),
    path('leave/', LeaveView.as_view()),
    path('mail/',MailView.as_view()),

]