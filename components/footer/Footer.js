import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="footer-section">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget subscribe">
                                <h3>Let's Get Started</h3>
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-field">
                                        <input type="email" placeholder="Get News & Update" id="semail" required />
                                        <button type="submit"><i className="icon-22"></i></button>
                                    </div>
                                </form>
                                <div className="radio-buttons">
                                    <p>
                                        <input type="radio" id="attend" name="radio-group" />
                                        <label htmlFor="attend">I agree to all your terms & policies</label>
                                    </p>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="icon-35"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="icon-32"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="icon-34"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="icon-33"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-2 offset-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/projects">Portfolio</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact Info</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li>Company -</li>
                                        <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                                        <li>4(406) 555-0120</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-2  offset-xl-1 col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0,4).map((service, srv) => (
                                        <li key={srv}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-8 col-12">
                            <ul className="lower-footer-link">
                                <li><Link onClick={ClickHandler} href="/home">Home</Link></li>
                                <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                <li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
                                <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="copy-right">
                                <p className="copyright"> Copyright &copy; 2024 <Link onClick={ClickHandler} href="/home">Consl.</Link> All rights
                                    reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;