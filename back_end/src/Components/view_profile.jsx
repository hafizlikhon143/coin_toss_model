import React, { Component } from 'react';
import avatar from "../img/AvatarFemale.png";
import "./css/view_profile.css";
import { Coin } from 'react-bootstrap-icons'
import axios from 'axios';

class View_Profile extends React.Component {

    state = {
        profile_data: "",
        user_data: "",
        card_num: "",
        last_digit: ""
    }

    componentDidMount (){
        axios({
            url: "/Profile_data",
            method: "get",
            mode: "same-origin"
        })
        .then(
            res => {
                let card_num = res.data.profile.card_num;
                card_num = card_num.toString()
                card_num = card_num.substring(0, 3);
                let last_digit = res.data.profile.last_digit;
                last_digit = last_digit.toString().substring(0, 2);
                this.setState({
                    profile_data: res.data.profile,
                    user_data: res.data.user,
                    card_num: card_num,
                    last_digit: last_digit
                })
                console.log(res.data);
            }
        )
    }
    render() { 
        return <div id="view_profile" className='container-md text-light bg-dark p-5 my-5 m-auto'>
            <div className="row">
                <div className="col-12 col-md-4 d-flex" >
                    <img src={this.state.profile_data.profile_pic} alt="" className="img-fluid m-auto" style={{ height: "300px"}} />
                </div>
                <div className="col-12 col-md- col-md-6 d-flex">
                    <div class="row m-auto">    
                        <div className="col-12 fs-3">
                            <div className="col-12 fs-3 fw-bold label">Fullname</div>
                            <div className="col-11 fs-1 m-auto">{`${this.state.user_data.first_name} ${this.state.user_data.last_name}`}</div>
                        </div>
                        <div className="col-12 m-auto">
                            <div className="row">
                                <div className="col-8 fs-3 fw-bold label">Username</div><div className="col-4 fs-3 fw-bold label">Token</div>
                            </div>
                            <div className="row">
                                <div className="col-8 fs-3 text-uppercase mx-2">{this.state.user_data.username}</div><div className="col-3 fs-3 p-0 m-auto" style={{overflow: "hidden"}}>1000$</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 m-auto">
                    <div className="row">
                        <div className="col-4 col-md-12 my-1 d-flex">
                            <a href="/Update" className="btn btn-warning m-auto">Update Profile</a>
                        </div>
                        <div className="col-4 col-md-12 my-1 d-flex">
                            <a href="/Password_change" className="btn btn-light m-auto">Change Password</a>
                        </div>
                        <div className="col-4 col-md-12 my-1 d-flex">
                            <a href="/Change_card" className="btn btn-light m-auto">Change Card</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="col-12 fs-3 fw-bold label">Email</div>
                    <div className="col-11 fs-3 m-auto">{this.state.user_data.email}</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <div className="col-12 fs-3 fw-bold label">Address-1</div>
                    <div className="col-11 fs-3 m-auto">{this.state.profile_data.address1}</div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="col-12 fs-3 fw-bold label">Address-2</div>
                    <div className="col-11 fs-3 m-auto">{this.state.profile_data.address2}</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-4">
                    <div className="col-12 fs-3 fw-bold label">State</div>
                    <div className="col-11 fs-3 m-auto">{this.state.profile_data.state}</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="col-12 fs-3 fw-bold label">City</div>
                    <div className="col-11 fs-3 m-auto">{this.state.profile_data.city}</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="col-12 fs-3 fw-bold label">Zip</div>
                    <div className="col-11 fs-3 m-auto">{this.state.profile_data.zip_code}</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-8">
                    <div className="col-12 fs-3 fw-bold label">Card Num</div>
                    <div className="col-11 fs-3 m-auto">{this.state.card_num}XXXXXXXXXX</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="col-12 fs-3 fw-bold label">Last Digit</div>
                    <div className="col-11 fs-3 m-auto">{this.state.last_digit}XX</div>
                </div>
            </div>
        </div>;
    }
}
 
export default View_Profile;