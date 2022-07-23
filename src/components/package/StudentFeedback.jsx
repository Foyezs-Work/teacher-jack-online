import React from 'react';
import Slider from "react-slick";

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
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                        <div>
                            <h3>7</h3>
                        </div>
                        <div>
                            <h3>8</h3>
                        </div>
                        <div>
                            <h3>9</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default StudentFeedback;