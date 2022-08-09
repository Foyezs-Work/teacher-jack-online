import React from 'react';

const CourseProcessing = () => {
    return (
        <section className='subscribe_section'>
            <h2 className='title'>How It Works</h2>
            <div className="container">
                <div className="section_padding">
                    <div className="row">

                        <div className="col-md-3 col-sm-6">
                            <div className="content_inner_box">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <div className="course_card_left">
                                            <i className="fa-solid fa-envelopes-bulk"></i>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='course_card_right'>
                                            <h3 className='course_card_title'>Email or Sent a message</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="content_inner_box">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <div className="course_card_left">
                                            <i className="fa-solid fa-clock"></i>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='course_card_right'>
                                            <h3 className='course_card_title'>Fix class timing</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="content_inner_box">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <div className="course_card_left">
                                            <i className="fa-solid fa-money-check"></i>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='course_card_right'>
                                            <h3 className='course_card_title'>Make payment </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="content_inner_box">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <div className="course_card_left">
                                            <i className="fa-solid fa-person-chalkboard"></i>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='course_card_right'>
                                            <h3 className='course_card_title'>attend class</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseProcessing;