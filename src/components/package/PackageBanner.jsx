import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { packageData } from '../../assets/datas/packInfo';

const PackageBanner = () => {
    return (
        <section className='pack_banner_container section_padding_extra'>
          
            <div className="container">
                <Carousel fade>
                    {
                        packageData.length > 0 && packageData.map((pack, index) => (
                            <Carousel.Item key={index + 1}>

                                <Carousel.Caption className='pack_banner_carousel_inner'>
                                    <div className="pack_carousel_content row align-items-center">
                                        <div className='col-md-7'>
                                            <div className='text-start'>
                                                <h2 className="content_title">{pack.title}</h2>
                                                <p>{pack.details}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="pack_carousel_img">
                                                <img src={pack.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default PackageBanner;