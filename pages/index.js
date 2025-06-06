import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Features from '../components/Features/Features';
import MarqueeSection from '../components/MarqueeSection/MarqueeSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import VideoSection from '../components/VideoSection/VideoSection';
import FunFact from '../components/FunFact/FunFact';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Testimonial from '../components/Testimonial/Testimonial';
import TeamSection from '../components/TeamSection/TeamSection';
import FaqSection from '../components/FaqSection/FaqSection';
import ContactSection from '../components/ContactSection/ContactSection';
import CtaSection from '../components/CtaSection/CtaSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <div className='page-wrap'>
                <Navbar hclass={'header-style-1'} Logo={Logo}/>
                <Hero />
                <About />
                <Features />
                <MarqueeSection />
                <ServiceSection />
                <VideoSection />
                <FunFact fClass={'pt-0'}/>
                <ProjectSection />
                <Testimonial />
                <TeamSection />
                <FaqSection />
                <ContactSection />
                <BlogSection />
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;