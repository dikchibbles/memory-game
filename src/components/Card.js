import React, {useState} from "react";

const Card = (props) => {
    const [clicked, setClicked] = useState(false)
    const [count, setCount] = useState(0)

    function getClicked () {
        console.log('this card' + props.title)
        console.log(clicked)
        if (clicked === true && count === 1) {
            console.log('you lose')
            props.youLose()
        } else {
            console.log('set to true')
            props.increaseScore();
            setClicked(true);
            setCount(count + 1);
            console.log(clicked);
        }
        props.reposition();
        
    }

    return (
        <div className="card" data-index={props.number} onClick={getClicked} style={{cursor: 'pointer'}}>
            <h2 className="card-title">{props.title}</h2>
            <img src={props.imgUrl} alt=''></img>
        </div>
    )
}

export default Card;









