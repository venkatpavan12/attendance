
from django.db import models
from django.conf import settings
# Create your models here.
def upload_path(instance,filename):
    return "/".join(['profile_pics',str(instance.internid),filename])


class Profile(models.Model):
    user=models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='profile')
    internid=models.IntegerField()
    tmnemailid=models.EmailField()
    internship_year=models.CharField(max_length=4)
    contact_number=models.IntegerField()
    team=models.IntegerField()
    department=models.CharField(max_length=25)
    gender=models.CharField(max_length=6)
    description=models.TextField()
    photo=models.ImageField(upload_to=upload_path,default='profile_pics/profile.jpg')
    def __str__(self):
        return self.user.username

class User_Attendance(models.Model):
    CHOICES=(
        ("CHECK_IN","CHECK_IN"),
        ("CHECK_OUT","CHECK_OUT")
    )
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='attendance')
    date=models.DateField(auto_now_add=True)
    type=models.CharField(max_length=9,choices=CHOICES)
    time=models.TimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = 'Users_Attendance'
    def __str__(self):
        return self.type + " " +str(self.time)


class Leave(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    startdate=models.DateField()
    enddate=models.DateField()
    reason=models.TextField()
    def __str__(self):
        return str(self.user)