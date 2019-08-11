import React, { Component } from 'react';
import './style.css';
import googleMap from './googleMap.png';

class EventWedding extends Component {
    render() {
        return (
            <div className="container3">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle">
                            The Big Day
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="info">
                            Feb 29, 2020
                    <br />
                            5:00 PM
                    <br />
                            Chicago, IL
                    <br />
                        </div>
                    </div>
                    <div className="col">
                        <div className="googleMap">
                        <img src={googleMap} alt=" " />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EventWedding;
