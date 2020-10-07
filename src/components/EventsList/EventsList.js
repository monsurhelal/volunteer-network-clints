import React from 'react';
import './events.css';
import imgurl from '../../images/childSupport.png'

const EventsList = () => {
    return (
        <div className="main">
            <img src={imgurl} alt=""/>
            <h2>child Support</h2>
            <h4>06 jun 2020</h4>
            <button>cancle</button>
        </div>
    );
};

export default EventsList;