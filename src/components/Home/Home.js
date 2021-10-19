import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <><><div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/service">Services</Link>
                    <Link className="navbar-brand" to="/appointment">Appointment Form</Link>
                </div>
            </nav>

        </div>
            <div>
                <img className="width" src="https://st.depositphotos.com/1028979/4049/i/600/depositphotos_40493159-stock-photo-doctor-working-with-healthcare-icons.jpg" alt="" />
            </div>
            <div className="container text-center mt-3">

                <div>
                    <h1><span className="header-text">Welcome To</span> - Health Care <span className="header-text">Agency</span>
                        <br /> HTML Template</h1>
                    <p>Our medical specialists care about you and your family’s health</p>
                </div>
                <div className="mt-4">
                    <button type="button" className="header-btn fw-bolder">Our Services +</button>
                    <p className="mt-3">More Services Coming Soon</p>
                </div>
            </div>
        </></>
    );
};

export default Home;