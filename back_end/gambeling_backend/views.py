from django.http import request
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.models import User
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.forms.models import model_to_dict
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password

# Create your views here.
@api_view(['GET'])
def user(request):
    if request.user.is_authenticated == True:
        print(request.user.username)
        user = model_to_dict(request.user)
        return Response({ "user": True, "userObj": user})
    else:
        return Response({ "user": False, 'userObj': None })
@api_view(["GET"])
def home_page(request):
    return render(request, "index.html", { "user": False })


# user login
@csrf_protect
def usersLogin(request):
    if request.method == "POST":
        if request.user.is_authenticated == True:
            return JsonResponse({"location": "", "message": ""})
        else:
            username = request.POST.get('username')
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)
            print(f"{username} {password}")
            if user is not None:
                login(request, user)
                print("LOGED IN")
                return JsonResponse({ 'location': "", "message": "" })
            else:
                return JsonResponse({ 'location': "/Sign_in", "message": "Username or Password is Wrong" })
    else:
        if request.user.is_authenticated:
            return redirect("/")
        else:
            return render(request, 'index.html')

# Profile Data
@login_required(login_url='/Sign_in')
@api_view(["GET"])
def profile_data(request):
    user = request.user
    user = UserSerializer(user, many=False)
    profile = User.objects.get(id=request.user.id)
    profile = profile.profile_set.all().get()
    profileSerializer = ProfileSerializer(profile, many=False)
    return Response({"user": user.data, "profile": profileSerializer.data })


#Profile_pic_Update
@login_required(login_url="/Sign_in")
@api_view(["POST"])
def profile_data_update_post(request):
    location = '/Update/Profile'
    user = request.user
    profile = user.profile_set.all().get()
    Profile = ProfileSerializer(profile, data=request.data, many=False, partial=True)
    if Profile.is_valid():
        Profile.save()
        print("\n\nSuccess\n\n")
        location = ""
        return Response({ "profile": Profile.data, "location": location })
    else:
        return Response({"msg": "No Data"})

# Profile_data_update
@login_required(login_url="/Sign_in")
@api_view(["POST"])
def profile_info_update(request):
    user = User.objects.get(id=request.user.id)
    user_serializer = UserSerializer(user, data=request.data, many=False, partial=True)
    if user_serializer.is_valid():
        user_serializer.save()
        return Response({"user": user_serializer.data})
    else:
        return Response({"mgs": "No data"})

@login_required(login_url="/Sign_in")
@api_view(["GET"])
def profile_data_update_get(request):
    location = '/Update/Profile'
    user = User.objects.get(id=request.user.id)
    user_serializer = UserSerializer(user, many=False)
    profile = user.profile_set.all().get()
    Profile = ProfileSerializer(profile, many=False)
    return Response({ "profile": Profile.data, "user": user_serializer.data, "location": location })


# user Register
@csrf_protect
@api_view(["POST"])
def registerUser(request):
    def getData(name):
        return request.POST.get(name)
    if request.method == "POST":
        email = getData("email")
        username = email.split("@")[0]
        users = User.objects.filter(email=email)
        
        if len(users) == 0:            
            user = User(
                first_name=getData("first_name"),
                last_name=getData("last_name"),
                email=email,
                username=username,
                password=make_password(password=getData('password1'), salt=None, hasher="default"),
                is_active=True,
                is_staff=False,
                is_superuser=False,
            )
            user.save()
            profile = Profile(
                user = User.objects.get(id=user.id),
                address1=getData('address1'),
                address2=getData('address2'),
                date_of_birth=getData("date_of_birth"),
                city=getData("city"),
                state=getData('state'),
                zip_code=getData("zip"),
                card_num=getData('card_num'),
                last_digit=getData("last_data")
            )
            profile.save()
            print(request.POST)
            return Response({ "message": "Account Created", "location": "/Sign_in" })
        else:
            return Response({ 'message': "User email already exist", "location": "" })

# logout
def log_out(request):
    logout(request)
    return redirect("/")
