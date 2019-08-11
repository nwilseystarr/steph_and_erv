import React, { Component } from 'react';
import Countdown from '../Countdown';
import './style.css';

class Title extends Component {
    render() {
        return (
            <div className="container2">
                <div className="names">
                Steph and Erv
                </div>
                <div className="date">
                February 29, 2020 | Chicago, IL
                </div>
                <div className="countdown">
                Only...
                <Countdown date={`2020-02-29T17:00:00`} />
                To Go!
                </div>
            </div>
        )
    }
}

export default Title;
