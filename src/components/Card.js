import React from "react";

const Card = (props) => {
    return (
        <div className="card" onClick={() => props.handleClick(props.character)} style={{cursor: 'pointer'}}>
            <h2 className="card-title">{props.character.name}</h2>
            <img src={props.character.img} alt={props.character.name}></img>
        </div>
    )
}

export default Card;









