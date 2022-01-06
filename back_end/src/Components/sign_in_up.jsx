import React, { Component } from 'react';
import "./css/sign_in_up.css";
import $ from 'jquery';
import jQuery from 'jquery';
import axios from 'axios';
import avatar from '../img/AvatarMale.png';





class Sign_in_up extends React.Component {

    constructor(props){
        super(props);
        this.state={
            csrf: "",
            msg: "",
            img: avatar
        }
        this.inputRef = React.createRef()
    }

    switchPanelSgnInUp = (e)=>{
        e.preventDefault();
        document.querySelector("#sign_up_wrap").classList.toggle("switchCont");
        document.querySelector("#sign_in_wrap").classList.toggle("switchCont");
        document.querySelector("#sign_up_wrap").classList.toggle("opacity");
        document.querySelector("#sign_in_wrap").classList.toggle("opacity");
    }
    async shouldComponentUpdate(prevState, nextState){
        if(prevState != nextState){
            this.inputRef.current.src = nextState.img;
        }
    }
    componentDidMount(){
        if(window.location.pathname == "/Register"){
            document.querySelector("#sign_up_wrap").classList.toggle("switchCont");
            document.querySelector("#sign_in_wrap").classList.toggle("switchCont");
            document.querySelector("#sign_up_wrap").classList.toggle("opacity");
            document.querySelector("#sign_in_wrap").classList.toggle("opacity");
        }
        document.getElementById("navbar").style.display = "none";
        document.getElementById("small-nav").style.display = "none";
        document.getElementById("main_footer").style.display = "none";
        var csrftoken = document.querySelector('input[name="csrfmiddlewaretoken"]');
        $('.tokenCsrf').html(csrftoken);
        this.setState({
            csrf: csrftoken.value
        })
        
        // this.inputRef.current.src = this.state.img;
        // console.log(this.inputRef.current.src);
    }

    onPost = (e)=>{
        e.preventDefault();
        let userForm = new FormData(e.target)
        let username = document.querySelector(".Email_sign_in").value;
        let password = document.querySelector(".Password_sign_in").value;
        userForm.append("username", username);
        userForm.append('password', password);
        axios({
            method: "post",
            url: "/Sign_in",
            data: userForm,
            mode: "same-origin",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': this.state.csrf
            }
        })
        .then(res=>{
            this.setState({
                msg: res.data.message
            })
            if (res.data.location != "/Sign_in"){
                window.location.pathname = res.data.location;
            }
            else{
                $(".msgError").html("<div class='fs-6 text-light bg-danger text-center mt-2'>"+res.data.message+"</div>");
            }
        })
    }

    onRegister = (e) => {
        e.preventDefault();
        let regForm = new FormData(e.target);
        axios({
            method: "post",
            url: "/Sign_up",
            data: regForm,
            mode: "same-origin",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': this.state.csrf
            }
        })
        .then(res=>{
            if(res.data.location == "/Sign_in" || res.data.location == "/Register"){
                window.location.pathname = res.data.location;
            }
            else{
                $(".msgRegError").html("<div class='fs-6 text-light bg-danger text-center mt-2'>"+res.data.message+"</div>");
            }
        })
    }

    regFormChange = e =>{
        let password = document.querySelector("#PasswordReg").value;
        let re_password = document.querySelector("#Re_PasswordReg").value;
        if (password != re_password || password.length <= 8 || password.length <= 8){
            console.log("main pass not matched");
            document.querySelector("#btnReg").setAttribute("disabled", true);
        }
        else{
            console.log("main matched");
            document.querySelector("#btnReg").removeAttribute("disabled", true);
        }
    }
    
    onChangeImg = (e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file && file.type.match('image.*')){
            reader.onload = async()=>{
                console.log(this.state.img);
                this.setState({
                    img: reader.result
                })
            }
            reader.readAsDataURL(file);
        }
    }

    render() { 
        return <div id="sign_in_up" className='container-fluid'>
            <div id="sign_in_wrap">
                <form onSubmit={this.onPost} className="form_sign_in col-11 col-md-6">
                    <div className="fs-3 text-uppercase"><span className="text-light">Coin</span><span className="text-warning">Toss</span></div>
                    <div className="fs-4 text-light text-uppercase">Sign In</div>
                    <div className="tokenCsrf"></div>
                    <div className="form_input">
                        <label htmlFor="Email_sign_in" className='text-light'>Email</label>
                        <br />
                        <input type="text" name='Email_sign_in' className="Email_sign_in col-12" placeholder='Enter your email address....' required />
                    </div>
                    <div className="form_input">
                        <label htmlFor="Password_sign_in" className='text-light'>Password</label>
                        <br />
                        <input type="password" name='Password_sign_in' className="Password_sign_in col-12" placeholder='Enter your password' required/>
                    </div>
                    <div className="col-12">
                        <input className="btn btn-success text-light fw-bold text-uppercase" type='submit' value="Sign In"/>
                    </div>
                    <div className="msgError"></div>
                    <div className="fs-5 text-center text-light">If you don't have an account click <a href="" className="text-warning text-decoration-none switchBtn" onClick={this.switchPanelSgnInUp} >Regester</a></div>
                </form>
            </div>
            <div id="sign_up_wrap" className='opacity'>    
                <form className="row gy-1  col-11 col-md-6 p-1 form_sign_up " style={{background: "#212529ea"}} onSubmit={this.onRegister} onChange={this.regFormChange} >
                    <div className="col-12 fs-3 text-uppercase m-0"><span className="text-light">coin</span><span className="text-warning">toss</span></div>
                    <div className="fs-4 m-0 col-12 text-light text-uppercase">Sign Up</div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="FirstName" className="form-label text-light">First Name</label>
                        <input type="text" name="first_name" id="FirstName" className="form-control" placeholder='Enter Your First Name' />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="last_name" className="form-label text-light">Last Name</label>
                        <input type="text" name="last_name" id="LastName" className="form-control" placeholder='Enter Your Last Name'/>
                    </div>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label text-light">Email</label>
                        <input type="email" className="form-control" name="email" id="EmailReg" placeholder='Write your email address here'/>
                    </div>
                    <div className="col-12">
                        <label for="#DOBReg" className="form-label text-light">Date Of Birth</label>
                        <input type="date" className="form-control" name="date_of_birth" id="DOBReg" placeholder='Write your email address here'/>
                    </div>
                    <div className="col-md-6 col-12">
                        <label for="inputPassword4" className="form-label text-light">Password</label>
                        <input type="password" name="password1" className="form-control" id="PasswordReg" placeholder='Enter your new Password' />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="inputPassword5" className="form-label textlight">Re-enter Password</label>
                        <input type="password" id="Re_PasswordReg" name="password2" className="form-control" placeholder='Re-Enter your Password' />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label text-light">Address</label>
                        <input type="text" className="form-control" id="AddressReg1" name="address1" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label text-light">Address 2</label>
                        <input type="text" className="form-control" id="AddressReg2" name="address2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label text-light">City</label>
                        <input type="text" className="form-control" id="CityReg" name="city" placeholder='Dhaka'/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label text-light">State</label>
                        <input type="text" id="StateReg" name="state" className="form-control" placeholder='Dhaka, Bangladesh' />
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label text-light">Zip</label>
                        <input type="text" className="form-control" id="ZipReg" name="zip" placeholder='12XX'/>
                    </div>
                    <div className="col-8">
                        <label htmlFor="" className="form-label text-light">Card Num</label>
                        <input type="text" className="form-control" id="CardNumReg" name="card_num" placeholder='Expample 16XXXXXXXXXXX5' />
                    </div>
                    <div className="col-4">
                        <label htmlFor="" className="form-label text-light">4-digit</label>
                        <input type="text" className="form-control" id="LastDigitReg" name="last_digit" placeholder='4XXX' />
                    </div>
                    <div className="col-12 pt-2">
                        <button type="submit" id="btnReg" className="btn btn-warning fw-bold fs-5 text-uppercase">Register</button>
                    </div>
                    <div className="msgRegError"></div>
                    <div className="fs-5 text-center text-light py-2">If you already have an account click <a href="" className="text-warning text-decoration-none switchBtn" onClick={this.switchPanelSgnInUp}>Sign In</a></div>
                </form>
            </div>
        </div>;
    }
}
 
export default Sign_in_up;