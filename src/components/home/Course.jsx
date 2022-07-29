import React from 'react';
import english1 from "../../assets/images/course_icon/english_for_adult.png"
import english2 from "../../assets/images/course_icon/english_for_kids.png"
import business from "../../assets/images/course_icon/business_certificate.png"
import ielts from "../../assets/images/course_icon/ielts.webp"

const Course = () => {
    return (
        <section className='section_padding coruse_section'>
            <h2 className='title'>Course</h2>
            <div className="container">
                <div className="section_padding">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="card border">
                                <div className="custom_card_header"></div>
                                <div className="card-body">
                                    <ul className='course_list'>
                                        <li>
                                            {/* <i class="fa-solid fa-person-chalkboard"></i> */}
                                            <img src={english2} alt="English Communication Development for Kids" />

                                            <span className="ms-2"> English Communication Development for Kids</span>
                                        </li>
                                        <li>
                                            {/* <i class="fa-solid fa-person-chalkboard"></i> */}
                                            <img src={english1} alt="English Communication Development for Adults" />
                                            <span className="ms-2"> English Communication Development for Adults </span>
                                        </li>
                                        <li>
                                            {/* <i class="fa-solid fa-person-chalkboard"></i> */}
                                            <img src={business} alt="Business English Certificate (BEC) Preparation" />
                                            <span className="ms-2"> Business English Certificate (BEC) Preparation </span>
                                        </li>
                                        <li>
                                            {/* <i class="fa-solid fa-person-chalkboard"></i> */}
                                            <img src={ielts} alt=" IELTS Preparation" />
                                            <span className="ms-2">  IELTS Preparation </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mt-3">
                            <div className="card border">
                                <div className="custom_card_header"></div>
                                <div className="card-body">
                                    <p className='content_details'>No one can master a Language in a few days or in a few weeks. It requires some time, energy and dedication. To grasp English language well, you should consider 100 hours of training over a 4 to 5 months span in a structured way. Only then you will observe the improvement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Course;