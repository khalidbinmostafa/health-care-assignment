import React from 'react';
import '../Home/Home.css';

const About = () => {
    return (
        <><div className="container-fluid d-flex">
            <div className="text-center mx-3">
                <h1><span className="fw-normal">We Offer</span>
                    <span className="fw-bold"> Fast & Reliable </span>
                    <span className="header-text">Medical & HealthCare Solutions to Our Patients</span></h1>
                <p>Expertise. Compassion. Advanced technologies. The Heart Center at Nationwide Children's Hospital provides pediatric and adult heart patients with outstanding diagnostic, treatment and research facilities. At Nationwide Children’s Hospital, patients and families experience innovation and advancements unlike any other institution.</p>
            </div>
            <div>
                <img src="https://pro-theme.com/html/health/media/670x375/1.jpg" alt="" />
            </div>
        </div>
            <h1 className="mt-3">In our Services <span className="header-text">We Provide</span></h1>
            <div className="container-fluid d-flex mt-3">

                <div className="mx-5 fw-bold">
                    <ul>
                        <li>We offer the best service. So the patients have nothing to worry.</li>
                        <li>We don't ignore any patients whether he/she are not much ill.  </li>
                        <li>Low Cost fee service. The visit of doctor is very much low price.</li>
                        <li>No bribe is taken here. Compounder has not able to take bribe.</li>
                        <li>The environment of our institution is very much patient friendly</li>
                    </ul>
                </div>
                <div className="mx-3">
                    <img className="px-3" src="https://pro-theme.com/html/health/media/320x200/1.jpg" alt="" />
                    <img src="https://pro-theme.com/html/health/media/320x200/2.jpg" alt="" />
                </div>
            </div></>

    );
};

export default About;