import React, { Component } from 'react';
import "./css/intro.css"


class Intro extends React.Component {
    render() { 
        return <div id="intro">
            <div className="container-md">
                <div className="intro-text">
                    <div className="fs-1 text-light">Welcome to <span className="text-warning">CoinToss</span></div>
                    <br />
                    <br />
                    <br />
                    <a href='#home' className="btn btn-outline-warning">View Bets</a>
                </div>
            </div>
        </div>;
    }
}
 
export default Intro;