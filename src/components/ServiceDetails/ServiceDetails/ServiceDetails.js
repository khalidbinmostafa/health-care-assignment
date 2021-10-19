import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/healthCare.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const findService = services.find(service => service.id == serviceId)
    console.log(findService);
    return (
        <div className="col">
            <div className="card">
                <img src={findService?.img} className="card-img-top img-size" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{findService?.name}</h5>
                    <p className="card-text text-center">{findService?.description}</p>

                    <button className="header-btn">Home</button>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;