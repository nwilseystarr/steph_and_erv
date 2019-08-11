import React, { Component } from 'react';
import './style.css';

export class WeddingPartyWrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default WeddingPartyWrapper
