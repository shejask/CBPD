import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import About9 from '../../components/about9/about-9';
 
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import FaqSectionS2 from '../../components/FaqSectionS2/FaqSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <Hero2 />
                <About2 />
                <PartnerSection />
                {/* <ProjectSection2 /> */}
                <About9 />

 
                <ServiceSectionS2 />
                <ChooseSection />
                 <BenefitSection />
                {/* <FaqSectionS2 /> */}
                {/* <Testimonial2 /> */}
                <CtaSection />
                <InstagramSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;