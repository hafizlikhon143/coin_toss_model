import React, { Component } from 'react';
import img1 from "../img/download.jpg";
import flag1 from '../img/flag-1.png';
import flag2 from '../img/flag-2.png';
import "./css/card_view.css"
import { Link } from 'react-router-dom';


class CardView extends React.Component {

    numAdd = (e)=>{
        var targetId = e.target.getAttribute("data-id");
        var inputValue = document.querySelector(`.bet-ammount[data-id="${targetId}"]`).value;
        document.querySelector(`.bet-ammount[data-id="${targetId}"]`).value = Number(`${inputValue}${e.target.innerText}`);
        console.log(inputValue);
    }
    numRemove = e=>{
        var targetId = e.target.getAttribute("data-id");
        var inputValue = document.querySelector(`.bet-ammount[data-id="${targetId}"]`).value;
        var inputValue = String(inputValue);
        var newValue = inputValue.slice(0, -1);
        document.querySelector(`.bet-ammount[data-id="${targetId}"]`).value = Number(`${newValue}`);
    }
    cardHide = e => {
        document.querySelector(".card_view").classList.add("d-none");
    }
    render() { 
        return <div className='card_view text-light bg-dark p-5 d-none'>
            <button className="btn btn-outline-secondary fs-1 text-light cross-btn" onClick={this.cardHide}>X</button>
            <div className="float-container m-auto">
                <div className="row">
                    <div className="col-12">
                        <div className="fs-2 text-light text-title text-center">Bangladesh vs England</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center m-0 p-0">
                        <img src={img1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12">
                        <div className="fs-3 col-12">Match Details</div>
                        <div className="row">
                            <div className="col-4 flag-1 d-flex justify-content-center border m-0 p-0"><img src={flag1} alt="" className="img-fluid" /></div>
                            <div className="col-4 text-center d-flex justify-content-center align-items-center"><div className="fs-2">VS</div></div>
                            <div className="col-4 flag-2 d-flex justify-content-center border m-0 p-0"><img src={flag2} alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 text-center fs-4">Score: 157/2</div><div className="col-4"></div><div className="col-4 text-center fs-4">Score: 201/10</div>
                        </div>
                        <div className="col-12 fs-4 text-center text-success">Winner: Bangladesh</div>
                        <div className="col-12 fs-5 text-center">Match Status: Running</div>
                    </div>
                    <div className="col-12">
                        <div className="row text-center px-3 bg-light text-dark fw-bold">
                            <div className="col-4">WIN</div><div className="col-4">TIE</div><div className="col-4">LOSS</div>
                        </div>
                        <div className="row text-center">
                            <div className="col-4 bg-success p-3">1.5</div><div className="col-4 bg-warning p-3">0.5</div><div className="col-4 bg-danger p-3">2.0</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row text-light fw-bold fs-3">
                            <div className="col-12 fs-4">Place Bets</div>
                            <input type="number" name="bet-ammount" className="col-12 form-control bet-ammount" data-id="1" placeholder='Enter Betting Amount' />
                            <div className="col-12 row gy-2 justify-content-center m-auto p-2 ">
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>0</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>1</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>2</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>3</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>4</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>5</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>6</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>7</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>8</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numAdd}>9</button>
                                <button className="col-2 btn btn-primary fw-bold mx-1" data-id="1" onClick={this.numRemove}>X</button>
                            </div>
                            <div className="row m-auto justify-content-center">
                                <button className="col-3 btn-win btn btn-success mx-2">WIN</button>
                                <button className="col-3 btn-win btn btn-warning mx-2">TIE</button>
                                <button className="col-3 btn-win btn btn-danger mx-2">WIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default CardView;