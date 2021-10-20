import React from 'react';
import './Home.css';

const Home1 = () => {
    return (
        <><> <div>
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
}
export default Home1;