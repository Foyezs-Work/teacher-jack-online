import React from 'react';
import { classData } from '../../assets/datas/class';

const AboutTeacherJack = () => {
    return (
        <section className='section_padding'>
            <h2 className='title'>About Teacher Jack</h2>
            <div className="container">
                <div className="section_padding">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card shadow-sm">
                                <div className="card-header p-3">
                                    <div className="card-title">
                                        <h2 className=''>Top Notch Lesson</h2>
                                    </div>
                                </div>
                                <div className="card-details p-3">
                                    <p className="content_details"> Teacher Jack is experienced and has taught students from various countries over the past 7 years, including China, South Korea, Mexico and the United States of America. Teacher Jack is friendly, helpful, open minded and affordable. He goes the extra mile to ensure student understanding of the lessons. He travels a lot and interacts with people from different background. He is knowledgeable and knows exactly which student requires what level of training. He is easily reachable and is always ready to help his students. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row justify-content-center">
                                {
                                    classData.length > 0 && classData.map((item, index) => (
                                        <div className='col-md-6 mb-4'>
                                            <div className="shadow-sm">
                                                <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
                                                    <img src={item.thumbnail} alt={item.title} className="img-fluid" style={{ width: "100%" }} />
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeacherJack;