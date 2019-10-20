import React from "react";
import "./card.css"

function Card(props) {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}/?set=set2&size=250x250`}/>
            <h2>{props.monster.name}</h2>
            <h2>{props.monster.email}</h2>
        </div>
    )
}

export default Card;