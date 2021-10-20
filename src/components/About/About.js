import React from 'react';
import '../Home/Home.css';
import './About.css';

const About = () => {
    return (
        <><div className="container">
            <div className="d-flex row">
                <div className="text-center mx-3 col-lg-4 col-sm-6">
                    <h1><span className="fw-normal">We Offer</span>
                        <span className="fw-bold"> Fast & Reliable </span>
                        <span className="header-text">Medical & HealthCare Solutions to Our Patients</span></h1>
                    <p>Expertise. Compassion. Advanced technologies. The Heart Center at Nationwide Children's Hospital provides pediatric and adult heart patients with outstanding diagnostic, treatment and research facilities. At Nationwide Children’s Hospital, patients and families experience innovation and advancements unlike any other institution.</p>
                </div>
                <div className="col-lg-7 col-sm-6">
                    <img className="img-fluid response" src="https://pro-theme.com/html/health/media/670x375/1.jpg" alt="" />
                </div>
            </div>
            <h1 className="mt-3">In our Services <span className="header-text">We Provide</span></h1>
            <div className="d-flex row mt-3">

                <div className="col-lg-3 col-sm-4 fw-bold">
                    <ul>
                        <li>We offer the best service. So the patients have nothing to worry.</li>
                        <li>We don't ignore any patients whether he/she are not much ill.  </li>
                        <li>Low Cost fee service. The visit of doctor is very much low price.</li>
                        <li>No bribe is taken here. Compounder has not able to take bribe.</li>
                        <li>The environment of our institution is very much patient friendly</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-7 mx-3">
                    <div className="mb-3"> <img className="img-fluid px-3" src="https://pro-theme.com/html/health/media/320x200/1.jpg" alt="" />
                    </div>
                    <div><img className="img-fluid" src="https://pro-theme.com/html/health/media/320x200/2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div></>

    );
};

export default About;