import React, { Component } from 'react';
import "./css/profile.css"
import { PersonFill, Coin, Pencil } from 'react-bootstrap-icons'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Profile extends React.Component {

    state = {
        profile_pic: ""
    }

    componentDidMount(){
        axios({
            url: "/Profile_data",
            method: 'GET',
            mode: 'same-origin',
        })
        .then(
            res => {
                this.setState({
                    profile_pic: res.data.profile.profile_pic
                })
            }
        )
    }
    render() { 
        return <React.Fragment>
            <button className="btn-toggle" data-bs-toggle="collapse" data-bs-target="#profile_cont"><PersonFill/></button>
            <div id="profile_cont" className='container-fluid bg-dark rounded collapse p-2 border'>
                <div className="row">
                    <div className=" col-12 d-grid justify-content-center img-cont m-auto d-flex" style={{overflow: "hidden", height:"250px"}}>
                        <img src={this.state.profile_pic} alt="" className="m-auto rounded" style={{width: "230px"}} />
                    </div>
                    <div className="col-12 text-light p-2 desc-cont m-auto">
                        <div className="row m-auto">
                            <div className="col-12 position-relative">
                                <div className="fs-6 col-8 fw-bold text-uppercase profile-label text-warning">Name</div>
                                <div className="fs-5 col-11 profile-data m-auto px-2">{`${this.props.info.first_name} ${this.props.info.last_name}`}<Link className='text-light position-absolute end-0 mx-2' to="/Update/Profile"><Pencil/></Link></div>
                            </div>
                            <div className="col-12 row m-auto text-left p-0">
                                <div className="fs-6 col-8 fw-bold text-uppercase profile-label text-warning">Username</div><div className="fs-6 col-4 fw-bold text-uppercase profile-label text-warning">Token's</div>
                                <div className="fs-5 col-12 profile-data">
                                    <div className="row">
                                        <div className="col-8 px-4">{this.props.info.username}</div><div className="col-4 text-success px-4 d-flex"><div className="m-auto px-1">20</div><Coin className='text-warning m-auto col-6'/></div>
                                    </div>
                                </div>
                                <div className="fs-6 col-12 fw-bold text-uppercase profile-label text-warning">Email</div>
                                <div className="fs-5 col-12 profile-data px-4">{this.props.info.email}</div>
                                <div className="row m-auto mt-4">
                                    <Link to="/Update/Profile" className="btn btn-outline-warning text-uppercase col-12 m-auto">Update</Link><button className="btn btn-outline-light text-uppercase col-12 m-auto mt-2">Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>;
    }
}
 
export default Profile;