import React, { Component } from 'react';
import Card from './card';
import img1 from '../img/download.jpg';
import img2 from '../img/img2.jpg';
import "./css/home.css";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueLeft: 0,
        }
    }
    scrollCont = document.getElementsByClassName("scroll-cont");
    componentDidMount(){

    }
    lsScroll = (e)=>{
        if(this.state.valueLeft < e.target.parentElement.scrollWidth/2-131){
            e.target.parentElement.scroll({
                left: this.state.valueLeft + 200,
                behavior: "smooth"
            })
            this.setState({
                valueLeft: this.state.valueLeft +200
            })
        }
        else{
            this.setState({
                valueLeft: 0
            })
        }
    }
    gsScroll = (e)=>{
        if(this.state.valueLeft > 0){
            e.target.parentElement.scroll({
                left: this.state.valueLeft - 200,
                behavior: "smooth"
            })
            this.setState({
                valueLeft: this.state.valueLeft -200
            })
        }
        else{
            this.setState({
                valueLeft: e.target.parentElement.scrollWidth/2-50
            })
        }
    }
    render() { 
        return <div className="container-md home-cont bg-dark py-3 my-5" id={this.props.id}>
            <h4 className="text-white mx-3 mt-4 text-uppercase">{this.props.title}</h4>
            <p className="text-light mx-3">{this.props.desc}</p>
            <div className="cont-1 position-relative">
            <div className="container-fluid scroll-cont d-flex bg-dark  m-auto">
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                <button className="btn btn-secondary btnF position-absolute start-0 top-0 bottom-0 rounded-0 fs-1 fw-bold" onClick={this.gsScroll}>&lt;</button>
                <button className="btn btn-secondary btnB position-absolute end-0 top-0 bottom-0 rounded-0 fs-1 fw-bold" onClick={this.lsScroll}>&gt;</button>
            </div>
            </div>
        </div>;
    }
}
 
export default Home;