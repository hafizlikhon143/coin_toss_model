import React, { Component } from 'react';
import "./css/bets_view.css"
import {Coin} from 'react-bootstrap-icons'

class Bets_View extends React.Component {
    grandTotal = (e)=>{
        var amm_values = document.querySelectorAll(".ammount_value");
        var total_value = 0;
        amm_values.forEach(value=>{
            total_value += Number(value.innerText);
        })
        return total_value;
    }
    tglBetCont = e =>{
        document.querySelector("#bets_view").classList.toggle("bets_view_show");
    }
    render() { 
        return <React.Fragment >
        <div className="bets_view_toggle fs-1 fw-bold" ><Coin onClick={this.tglBetCont}/></div>
        <div id="bets_view" className='bg-dark p-4 position-fixed bets_view_show'>
            <div className="row text-light">
                <div className="col-12 fs-3 text-warning fw-bold text-uppercase text-center">Manage Bets</div>
                <div className="col-12 fs-4 fw-bold position-relative btn-col" data-bs-toggle="collapse" data-bs-target="#bet_cont1" onClick={this.tglBtn}>Bet Placed <span className="fs-6 fw-light text-secondary text-capitalize" >(Click to View or close)</span></div>
                <div className="row text-center bet_cont m-auto mt-3 collapse show" id='bet_cont1'>
                    <div className="col-4 fw-bold p-2 bg-light text-dark">Name of Bet</div><div className="col-4 fw-bold p-2 bg-light text-dark">ODD</div><div className="col-4 fw-bold p-2 bg-light text-dark">Placed Token</div>
                    <div className="col-4">Bangladesh VS England</div><div className="col-4">WIN</div><div className="col-4 ammount_value">5</div>
                    <div className="col-4">Bangladesh VS England</div><div className="col-4">WIN</div><div className="col-4 ammount_value">5</div>
                    <div className="col-4">Bangladesh VS England</div><div className="col-4">WIN</div><div className="col-4 ammount_value">5</div>
                    <div className="col-4">Bangladesh VS England</div><div className="col-4">WIN</div><div className="col-4 ammount_value">5</div>
                    <div className="col-8">Grand Total</div><div className="col-4">{this.grandTotal()}</div>
                </div>
            </div>
            <hr className='bg-light'/>
            <div className="row text-light text-center mt-3">
                <div className="col-12 text-light fs-4 fw-bold text-capitalize text-start position-relative btn-col" data-bs-toggle="collapse" data-bs-target="#bet_cont2" onClick={this.tglBtn}>Bet's History <span className="fs-6 fw-light text-secondary text-capitalize">(Click to View or close)</span></div>
                <div className="row m-auto mt-3 bet_cont collapse show" id='bet_cont2'>
                    <div className="p-2 col-4 fw-bold bg-light text-dark border border-dark">Name of Bets</div><div className="col-4 p-2 fw-bold text-dark border bet-cont border-dark bg-light">Status</div><div className="p-2 col-4 fw-bold text-dark bg-light border border-dark">Wined Token</div>
                    <div className="col-4 border border-light">Bangladesh VS Pakistan</div><div className="col-4 border border-light">WIN</div><div className="col-4 border border-light history-ammount">10</div>
                    <div className="col-4 border border-light">Bangladesh VS Pakistan</div><div className="col-4 border border-light">LOSS</div><div className="col-4 border border-light history-ammount">10</div>
                    <div className="col-4 border border-light">Bangladesh VS Pakistan</div><div className="col-4 border border-light">WIN</div><div className="col-4 border border-light history-ammount">10</div>
                    <div className="col-4 border border-light">Bangladesh VS Pakistan</div><div className="col-4 border border-light">LOSS</div><div className="col-4 border border-light history-ammount">10</div>
                    <div className="col-4 border border-light">Bangladesh VS Pakistan</div><div className="col-4 border border-light">WIN</div><div className="col-4 border border-light history-ammount">10</div>
                </div>
            </div>
            <hr className='bg-light'/>
        </div>
        </React.Fragment>;
    }
}
 
export default Bets_View;