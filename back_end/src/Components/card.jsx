import React, { Component } from 'react';


class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }
    imgStyle = {
        
    }

    cardView = e => {
        document.querySelector(".card_view").classList.remove("d-none");
    }

    render() { 
        return <div className="card bg-light text-white col-11 col-sm-7 col-md-5 m-2" onClick={this.cardView}>
            <img src={this.props.img_link} alt="" className="card-img" />
            <div className="card-img-overlay">
                <h5 className="card-title">{this.props.card_title}</h5>
                <p className="card-text">{this.props.card_txt}</p>
                <p className="card-text"><h6>{this.props.last_updated}</h6></p>
            </div>
        </div>;
    }
}
 
export default Card;