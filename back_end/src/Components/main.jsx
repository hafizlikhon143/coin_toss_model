import React, { Component } from 'react';
import Navbar from './navbar';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./css/main.css"
import SmallNav from './small-nav';
import Home from './home';
import Footer from './footer';
import Intro from './intro';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sign_in_up from './sign_in_up';
import CardView from './card_view';
import Bets_View from './bets_view';
import Profile from './profile';
import View_Profile from './view_profile';
import ProfileForm from './profile_form';
import AllBets from './all_bets';
import favico from '../img/favicon_io/favicon-32x32.png'

class Main extends React.Component {

    state = {
        acState: false,
        userInfo: {}
    }

    componentDidMount(){
        // Start of Favicon
        var favicon = document.querySelector(".favIcon");
        favicon.setAttribute("href", favico);
        // end of Favicon

        const axios = require('axios');
        axios.get("/user")
        .then((response)=>{
            this.setState({
                acState: response.data.user,
                userInfo: response.data.userObj
            })
        })
        document.querySelector("title").innerText = "Bets All You Want";
    }
    render() { 
        return <div id="main_body">
            <Router>
                <Navbar is_authenticated={this.state.acState}/>
                <SmallNav/>
                {this.state.acState == true?<Profile info={this.state.userInfo} />: undefined}
                <Bets_View/>
                <CardView/>
                <Switch>    
                    <Route exact path="/">
                        <Intro/>
                        <Home title="CASINO" desc="Enjoy By placeing bet and playing various Casino Games." id="home" />
                        <Home title="virtual game" desc="Enjoy By placeing bet and playing various Virtual Games."/>
                    </Route>
                    <Route exact path="/Casino">
                        <AllBets header="CASINO" />
                    </Route>
                    <Route exact path="/Tv-bets">
                        <AllBets header="TV-BETS" />
                    </Route>
                    <Route exact path="/Es-bets">
                        <AllBets header="ES-Sports" />
                    </Route>
                    <Route exact path="/Vr-bets">
                        <AllBets header="VIRTUAL BETS" />
                    </Route>
                    <Route exact path="/Profile_view">
                        <View_Profile/>
                    </Route>
                    <Route exact path="/Update/Profile">
                        <ProfileForm/>
                    </Route>
                    <Route exact path="/Update/Profile/Info">
                        <ProfileForm/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
            <Router>
                <Switch>
                    <Route exact path="/Sign_in">
                        <Sign_in_up/>
                    </Route>
                    <Route exact path="/Register">
                        <Sign_in_up/>
                    </Route>
                </Switch>
            </Router>
        </div>
    }
}
 
export default Main;