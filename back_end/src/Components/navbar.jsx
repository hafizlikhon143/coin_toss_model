import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./css/navbar.css"
import { Link } from 'react-router-dom'
import { PersonBadgeFill } from 'react-bootstrap-icons'

class Navbar extends React.Component {


    handelHamberger = ()=>{
        document.getElementById("hamberger").classList.toggle("hamberger-active");
        document.getElementById("navbar-item").classList.toggle("nav-item-active");
    }

    unauthenticated = <React.Fragment>
                        <a href="/Sign_in" className="btn btn-light mx-1" style={{borderBottomRightRadius: "0px", borderTopRightRadius: "0px"}}>Sign In</a>
                        <a href="/Register" className="btn btn-warning" style={{borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px"}}>Register</a>
                    </React.Fragment>

    authenticated = <React.Fragment>
                        <div className=" text-dark mx-1 btn btn-light" style={{borderBottomRightRadius: "0px", borderTopRightRadius: "0px"}}><PersonBadgeFill className='fs-4' /> devilninja</div>
                        <a href="/logout" className="btn btn-warning" style={{borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px"}}>Log Out</a>
                    </React.Fragment>
    render() { 
        return <div id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a href="/" className="navbar-brand fw-bold text-uppercase">CoinToss</a>
            <ul id="navbar-item" className="navbar-nav text-uppercase fw-bold">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Casino" className="nav-link">Casino</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Tv-bets" className="nav-link">TV-Bet</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Es-bets" className="nav-link">ES Sport</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Vr-bets" className="nav-link">Virtual Bet</Link>
                </li>
                <div className="d-flex" id="nav-btn">
                    {this.props.is_authenticated == true? this.authenticated: undefined}
                    {this.props.is_authenticated == false? this.unauthenticated: undefined}
                </div>
            </ul>
            <div className="d-flex" id="lg-btn" >
                {this.props.is_authenticated == true? this.authenticated: undefined}
                {this.props.is_authenticated == false? this.unauthenticated: undefined}
            </div>
            <button id="hamberger"  onClick={this.handelHamberger}>
                <div className="hamberger-mark"></div>
            </button>
        </div>
    </div>;
    }
}
 
export default Navbar;