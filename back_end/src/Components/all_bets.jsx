import React, { Component } from 'react';
import Card from "./card";
import img1 from '../img/download.jpg';


class AllBets extends React.Component {
    render() { 
        return <div className='all_bets container-fluid' style={{marginTop: "100px", marginBottom: "50px"}}>
            <div className="container-md rounded m-auto bg-dark" style={{background: "rgba(26, 24, 24, 0.835)"}}>
                <div className="row">
                    <div className="fs-1 text-light fw-bold pt-5">{this.props.header}</div>
                </div>
                <div className="row justify-content-center m-auto py-3 container-fluid p-0">
                    <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                    <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                    <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                    <Card img_link={img1} card_title="Bangladesh vs England" last_updated="3 min ago"/>
                </div>
                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example" className='m-auto'>
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>;
    }
}
 
export default AllBets;