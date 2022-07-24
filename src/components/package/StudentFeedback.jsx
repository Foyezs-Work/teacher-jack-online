import React from 'react';
import Slider from "react-slick";
import { studentFeedbackData } from '../../assets/datas/StudentFeedbackData';

import ReactStars from "react-rating-stars-component";

const StudentFeedback = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="student_feedback__Seciton section_padding">
            <div className="container h-100 py-md-3">
                <h3 className="section-title text-center fw-bold mt-5 mt-md-0 mb-5">What is saying our students?</h3>

                <div className="slidder_inner">
                    <Slider {...settings}>

                        {
                            studentFeedbackData.length > 0 && studentFeedbackData.map((feedback, index) => (
                                <div className="user_feedback">
                                    <div className="user_feedback_inner">
                                        <div className="user_feedback_profile">
                                            <div className="user_profile_img">
                                                <img src={feedback.profile} alt={feedback.name} className="" />
                                            </div>
                                            <h5 className="user_feedback_profile_name fw-bold my-2">{feedback.name}</h5>
                                            <ReactStars
                                                count={feedback.rating}
                                                size={28}
                                                activeColor="#ff6b61"
                                                color="#ff6b61"
                                                edit={false}
                                            />
                                        </div>
                                        <div className="user_feedback_details">
                                            <p>{feedback.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default StudentFeedback;