import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Home.css';


const Home = () => {
    const { user, logOut } = useAuth();
    return (
        <><><div>
            <nav className="fixed-top navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/services">Services</Link>
                    <Link className="navbar-brand" to="/appointment">Appointment Form</Link>
                    {user?.email ?
                        <button>Log out</button> :
                        <Link className="navbar-brand" to="/login">Login</Link>}
                    <a href="#login">{user?.displayName}</a>

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