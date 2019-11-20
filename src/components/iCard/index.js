import React from "react";
import "./icard.css";

const ICard = props => {
    return(
        <div className="card" onClick={() => props.CLASS_METHOD_HERE(props.id)}>
            <div className="img-holder">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    ); 
};

export default ICard;
