import React from "react";
import Link from 'next/link'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="service-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2">
                            <small>Popular Services</small>
                            <h2>We Provide Modern Business Consulting <span>Solutions</span></h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.map((service, srv) => (
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={srv}>
                                <div className="service-item">
                                    <div className="service-top">
                                        <div className="icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="service-text">
                                            <h2>{service.Id}.</h2>
                                            <h3><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                        </div>
                                    </div>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;