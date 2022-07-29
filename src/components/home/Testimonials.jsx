import React from 'react';
import Slider from "react-slick";
import { testimonialsData } from '../../assets/datas/testimonalsData';

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <div className='section_padding testimonial_section'>
            <h2 className='title'>Testimonials</h2>
            <div className="container">
                <div className="section_padding">
                    <Slider {...settings}>
                        {
                            testimonialsData.length > 0 && testimonialsData.map((item, index) => (
                                <div className='' key={index + 1}>
                                    <div className="card shadow-sm m-2">
                                        {
                                            item.author !== "" && item.img !== "" &&
                                            <div className="testimonial_card_header">
                                                <img src={item.img} alt={item.author} />
                                                <h6 className='author_name'> {item.author} </h6>
                                            </div>
                                        }

                                        {
                                            item.thumbnail !== "" ?
                                                <div className="testimonial_details">
                                                    <img src={item.thumbnail} alt={`Testimonial ${item.id}`} className="img-thumbnail" style={{minHeight: "250px"}} />
                                                </div> :

                                                <div className="testimonial_details">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>

                                        }
                                    </div>
                                </div>
                            ))

                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;