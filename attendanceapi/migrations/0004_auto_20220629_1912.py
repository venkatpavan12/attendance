# Generated by Django 3.2.5 on 2022-06-29 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendanceapi', '0003_alter_user_attendance_checkouttime'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user_attendance',
            old_name='checkintime',
            new_name='time',
        ),
        migrations.RemoveField(
            model_name='user_attendance',
            name='checkouttime',
        ),
        migrations.RemoveField(
            model_name='user_attendance',
            name='id',
        ),
        migrations.AddField(
            model_name='user_attendance',
            name='type',
            field=models.CharField(choices=[('CHECK_IN', 'CHECK_IN'), ('CHECK_OUT', 'CHECK_OUT')], default='CHECK_IN', max_length=9),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user_attendance',
            name='date',
            field=models.DateField(auto_now_add=True, primary_key=True, serialize=False),
        ),
    ]
