import React from 'react';
import './style.css';


function WeddingParty(props){
        return (
            <div className="card">
                <div className="peopleName">{props.name}</div>
                <img className="image rounded-circle mx-auto d-block" alt={props.name} src={props.image} id={props.id} />
            </div>
        )
}

export default WeddingParty;
