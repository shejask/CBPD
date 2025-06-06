import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const VerificationsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Verifications'} pagesub={'Verify Your Credentials'} />
            <div className="verification-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="verification-content text-center">
                                <h2>Verify Your Professional Credentials</h2>
                                <p>Enter your certification ID or registration number to verify your credentials issued by CBPD.</p>
                                {/* Add verification form or content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default VerificationsPage;