import React, { Component } from 'react';
import { TelephoneFill, EnvelopeFill, Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons"
import "./css/footer.css"


class Footer extends React.Component {
    render() { 
        return <div id='main_footer' className='bg-dark'>
            <div className="container-lg m-auto row bg-dark">
                <div className="col-md-3 col-12 footer-1">
                    <div className="row text-light m-auto">
                        <div className="col-12 fs-4 my-3 tag">About Us</div>
                        <div className="col-12 my-2">
                            We are adding many new way to make your betting experience better. So we hope you will stay with us till the end.
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12 footer-2">
                    <div className="row text-light m-auto fs-5">
                        <div className="col-12 fs-4 my-3  tag">Survices</div>
                        <div className="col-12 my-2">
                            <a href="" className='text-uppercase text-light'>casino</a>
                        </div>
                        <div className="col-12">
                            <a href="" className='text-uppercase text-light'>TV Bets</a>
                        </div>
                        <div className="col-12">
                            <a href="" className='text-uppercase text-light'>Es sports</a>
                        </div>
                        <div className="col-12">
                            <a href="" className='text-uppercase text-light'>Virtual Bet</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12 footer-3 fs-6">
                    <div className="row text-light m-auto">
                        <div className="col-12 fs-4 my-3  tag">Upcomming Bets</div>
                        <div className="col-12">Banglades vs Pakistan</div>
                        <div className="col-12">Banglades vs England</div>
                        <div className="col-12">Banglades vs Westendies</div>
                        <div className="col-12">Banglades vs Pakistan</div>
                        <div className="col-12">Banglades vs Pakistan</div>
                    </div>
                </div>
                <div className="col-md-3 col-12 footer-4 fs-5">
                    <div className="row text-light m-auto">
                        <div className="col-12 fs-4 my-3 tag">Quick Links</div>
                        <div className="col-12 my-2">
                            <a href="/Sign_in" className='text-uppercase text-light'>Sign In</a>
                        </div>
                        <div className="col-12">
                            <a href="/Register" className='text-uppercase text-light'>Register</a>
                        </div>
                        <div className="col-12">
                            <a href="" className='text-uppercase text-light'>Blog</a>
                        </div>
                        <div className="col-12">
                            <a href="#root" className='text-uppercase text-light'>Back To Top</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 container-lg m-auto mt-3 row text-light text-center fs-5 info">
                <div className="col-12 text-start col-md-4 m-auto"><TelephoneFill/>&emsp;+88019010404**</div>
                <div className="col-12 text-start col-md-4 m-auto"><EnvelopeFill/>&emsp;contoss@gmail.com</div>
                <div className="col-12 text-start col-md-4 fs-4 text-center foot-link">
                    <a href="" className='text-light'><Facebook/></a>
                    &emsp;
                    <a href="" className='text-light'><Twitter/></a>
                    &emsp;
                    <a href="" className='text-light'><Instagram/></a>
                    &emsp;
                    <a href="" className='text-light'><Youtube/></a>
                </div>
            </div>
            <footer className='container-fluid text-center text-light bg-dark fs-5 pt-5'>&copy;copyright 2021 All Right Reserved by ____</footer>
        </div>;
    }
}
 
export default Footer;