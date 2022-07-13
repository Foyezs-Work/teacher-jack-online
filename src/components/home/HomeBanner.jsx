import React from 'react';
import homeImg from "../../assets/images/common/teacher_jack.jpg"
const HomeBanner = () => {
    return (
        <section className='section_padding'>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <div className="content_inner">
                            <h2 className='content_title'>Learn English The American Way</h2> <br />
                            <p className="content_details">Take Lessons from Teacher Jack and Speak Like a Native English Speaker.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content_inner">
                            <div className="content_inner_border"></div>
                            <img src={homeImg} alt="Home Banner" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;