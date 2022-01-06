import React, { Component } from 'react';
import "./css/small-nav.css"
import flag1 from "../img/united-states-of-america.png";

class SmallNav extends React.Component {
    handelChecked = ()=>{
        var checkbox = document.getElementById("checkbox");
        var slider = document.querySelector(".slider") ;
        if(checkbox.checked == true){
            slider.innerHTML = "EN";
            slider.classList.add("slider-active");
        }
        else{
            slider.innerHTML = "BN";
            slider.classList.remove("slider-active");
        }
    }
    handelClick = (e)=>{
        var navLink = document.querySelectorAll(".nav-link");
        e.preventDefault();
        navLink.forEach(link => {
            link.classList.remove("filter-active");
        });
        e.target.classList.add("filter-active");
        console.log(navLink);

    }
    render() { 
        return <div id="small-nav" className="navbar navbar-expand bg-dark bg-gradient navbar-dark" >
            <div className="container-fluid">
                <form id="1st_part" className="form_part nav-brand">
                    <input className="form-control fs-5 inputSearch" type="text" placeholder="⌕ Find Team, Country or League" aria-label="default input example"/>
                </form>
                <ul className="wrap">
                    <div className="navbar-nav filter-nav">
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link filter-active">Live</a></li>
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link">3h</a></li>
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link">6h</a></li>
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link">12h</a></li>
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link">Today</a></li>
                        <li className="nav-item"> <a href="/" onClick={this.handelClick} className="nav-link">Yesterday</a></li>
                    </div>
                </ul>
                <input type="checkbox" name="checkbox" id="checkbox" onChange={this.handelChecked} />
                <label htmlFor="checkbox" className="switch">
                    <div className="slider fw-bold text-light">BN</div>
                </label>
            </div>
        </div>;
    }
}
 
export default SmallNav;