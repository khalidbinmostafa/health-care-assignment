import React from 'react';
import '../Home/Home.css';

const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className="header-btn">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;