# Generated by Django 3.2.5 on 2022-07-02 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendanceapi', '0009_alter_profile_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(max_length=1),
        ),
    ]