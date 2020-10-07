import React from 'react';
import './Events.css';
import img from '../../images/animalShelter.png'
import { Link } from 'react-router-dom';

const Events = (props) => {
    console.log(props.event)
    const {id,imgUrl,title} = props.event;
    return (
        <div className="col-md-3">
            <img src={ require( `../../images/${imgUrl}`)} alt=""/>
           <Link to={`/resister/${id}`}><h3>{title}</h3></Link>
        </div>
    );
};

export default Events;