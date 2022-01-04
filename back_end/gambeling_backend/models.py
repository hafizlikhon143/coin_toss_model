from django.db import models
from django.contrib.auth.models import User
from django.db.models import fields
from django.conf import settings
import os



# Create your models here.

class Profile (models.Model):
    
    def user_directory_path(instance, filename):
        return 'Profile/{0}/{1}'.format(instance.user.id, filename)
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField(blank=True, null=True)
    address1 = models.CharField(max_length=255, blank=True, null=True)
    address2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.IntegerField(blank=True, null=True)
    card_num = models.IntegerField(blank=True, null=True)
    last_digit = models.IntegerField(blank=True, null=True)
    profile_pic = models.ImageField(upload_to=user_directory_path, blank=True, null=True, default="./AvatarMale.png")
    
    def __str__(self):
        return self.user.username
    