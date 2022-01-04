from django.urls import path
from django.urls.conf import include
from .views import *

urlpatterns = [
    path('user', user ),
    path('', home_page, name="Home"),
    path("Register", home_page),
    path("Sign_in", usersLogin),
    path('logout', log_out),
    path("Sign_up", registerUser),
    path("Profile_data", profile_data),
    path("Profile_view", home_page),
    path('Update/Profile', home_page),
    path('Update/Profile/Info', home_page),
    path("Casino", home_page),
    path('Update/Profile_data_get', profile_data_update_get),
    path('Update/Profile_data_post', profile_data_update_post),
    path('Update/Profile_info_post', profile_info_update)
]
