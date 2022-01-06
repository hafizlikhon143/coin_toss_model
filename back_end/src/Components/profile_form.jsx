import React, { Component } from 'react';
import avatar from '../img/AvatarMale.png';
import "./css/profile_form.css";
import axios from 'axios';

class ProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            csrf: "",
            profile: "",
            user: "",
            msg: ""
        }
        this.inputRef = React.createRef();
    }
    componentDidMount(){
        var csrftoken = document.querySelector('input[name="csrfmiddlewaretoken"]');
        console.log(csrftoken.value);
        this.setState({
            csrf: csrftoken.value
        })
        axios({
            url: "/Update/Profile_data_get",
            method: "get",
            data: {msg: "posted"},
            mode: "same-origin",
            headers:{
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        })
        .then(
            res => {
                this.setState({
                    profile: res.data.profile,
                    user: res.data.user
                })
            }
        )
        if(window.location.pathname == "/Update/Profile/Info"){
            document.getElementById("form_pic").classList.add("d-none");
            document.getElementById("form_info").classList.remove("d-none");
        }
        else{
            document.getElementById("form_pic").classList.remove("d-none");
            document.getElementById("form_info").classList.add("d-none");
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        var profile_pic = document.getElementById("ProfilePic").files[0];
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var csrftoken = document.querySelector('input[name="csrfmiddlewaretoken"]');
        var profileForm = new FormData();
        var infoForm = new FormData();
        profileForm.append("profile_pic", profile_pic);
        infoForm.append("first_name", first_name);
        infoForm.append("last_name", last_name);
        infoForm.append("email", email);
        console.log(profileForm);
        console.log(infoForm);
        if(profile_pic != "" || profile_pic != undefined || profile_pic != "none"){
            axios({
                url: "/Update/Profile_data_post",
                method: "POST",
                data: profileForm,
                headers: {
                    'Accept': 'application/json',
                    // "Content-Type": "application/json",
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrftoken.value
                }
            })
            .then(
                res => {
                    this.setState({
                        profile_pic: res.data.profile
                    })
                    if(res.data.location != undefined){
                        window.location.pathname = res.data.location
                    }
                    if(res.data.msg != undefined){
                        document.querySelector(".msgbox-1").innerText = res.data.msg;
                    }
                }
            )
        }
        axios({
            url: "/Update/Profile_info_post",
            method: "POST",
            data: infoForm,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'X-CSRFToken': csrftoken.value
            }
        })
        .then(
            res => {
                this.setState({
                    user: res.data.user
                })
            }
        )
        console.log("Posted");
    }
    render() { 
        return <div id='profile_pic_update' className='d-flex'>
            <form className="container-md m-auto p-5 rounded my-5" id="form_pic" onSubmit={this.onSubmit}>
                <div className="row gy-2">
                <div className="col-12">
                        <div className="fs-2 text-uppercase d-flex"><span className='text-warning'>coin</span><div className="text-light">toss</div></div>
                        <div className="col-12 text-warning fs-3">Update Profile</div>
                    </div>
                    <div className="col-12">
                    <label htmlFor="" className="form-label text-light fs-3">Profile Pic</label>
                        <label htmlFor="ProfilePic" className='col-12 d-flex my-2' id='img_preview'>
                            <img src={this.state.profile.profile_pic} ref={this.inputRef} id='img_profile' alt="" className="rounded m-auto py-1 bg-dark" style={{width: "250px", height: "300px"}}  />
                        </label>
                    </div>
                    <div className="col-12">
                        <div className="col-12 text-light">
                            Link: &emsp;
                            <a href={this.state.profile.profile_pic}>    
                                {this.state.profile.profile_pic}
                            </a>    
                        </div>
                    <input type="file" name="profile_pic" id="ProfilePic" className="form-control" placeholder='Choose you Profile Pic' accept="image/*" onChange={
                            async (e) => {
                                let reader = new FileReader();
                                let file = e.target.files[0];
                                if (file && file.type.match('image.*')){
                                    reader.onload = async()=>{
                                        console.log(reader.result);
                                        this.inputRef.current.src = reader.result;
                                    }
                                    reader.readAsDataURL(file);
                                    
                                }
                            }
                        }  />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="first_name" className='col-12 text-light'>First Name</label>
                        <input type="text" name="first_name" id="first_name" className='col-12 form-control' defaultValue={this.state.user.first_name} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="last_name" className='col-12 text-light'>Last Name</label>
                        <input type="text" name="last_name" id="last_name" className='col-12 form-control' defaultValue={this.state.user.last_name} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className='col-12 text-light'>Email</label>
                        <input type="email" name="email" id="email" className='col-12 form-control' defaultValue={this.state.user.email} />
                    </div>
                    <div className="col-12">
                        <button type='submit' className='btn btn-warning mx-1 fw-bold py-2' >Upload</button>
                    </div>
                </div>
                <div className="bg-danger text-light text-center msgbox-1"></div>
            </form>
            <form className="container-md p-5 m-auto d-none my-5" id="form_info">
                <div className="row">
                    <div className="col-12">
                        <div className="fs-2 text-uppercase d-flex"><span className='text-warning'>coin</span><div className="text-light">toss</div></div>
                        <div className="col-12 text-warning fs-3">Update Profile</div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="DOB" className="form-label text-light">Date of Birth</label>
                        <input type="date" name="date_of_birth" id="DOB" className="form-control" defaultValue={this.state.profile.date_of_birth} />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="address1" className="form-label text-light">Address-1</label>
                        <input type="text" name="address1" id="address1" className="form-control" defaultValue={this.state.profile.address1} />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="address1" className="form-label text-light">Address-2</label>
                        <input type="text" id="address2" name="address2" className="form-control" defaultValue={this.state.profile.address2} />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <label htmlFor="state" className="form-label text-light">State</label>
                                <input type="text" name="state" id="state" className="form-control" defaultValue={this.state.profile.state} />
                            </div>
                            <div className="col-12 col-md-4">
                                <label htmlFor="city" className="form-label text-light">City</label>
                                <input type="text" id="city" name="city" className="form-control" defaultValue={this.state.profile.city} />
                            </div>
                            <div className="col-12 col-md-4">
                                <label htmlFor="zip_code" className="form-label text-light">Zip Code</label>
                                <input type="number" name="zip_code" id="zip_code" className="form-control" defaultValue={this.state.profile.zip_code} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-warning fw-bold my-2">Update</button>
                    </div>
                </div>
            </form>
        </div>;
    }
}
 
export default ProfileForm;