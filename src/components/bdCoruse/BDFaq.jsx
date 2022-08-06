import React from 'react';
import { faqdata } from '../../assets/datas/faqData';
import manPhoto from "./../../assets/images/common/man.png"
import BDFaqCard from './BDFaqCard';
const BDFaq = () => {
    return (
        <section class="frequently-asked-component">
            <div class="frequently-asked-main">
                <div className="container">
                    <div class="title">
                        <h1 className="section-title fw-bold text-center text-white pt-5  pb-md-1">Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="row py-5 align-items-center">
                        <div className="col-md-7">

                            <div class="info">
                                {
                                    typeof faqdata !== "undefined" && faqdata !== null && faqdata.length > 0 && faqdata.map((item, index) => (
                                        <BDFaqCard item={item} id={index} key={index + 2000001} />
                                    ))
                                }

                            </div>
                        </div>

                        <div className="col-md-5 thinker-image-div pt-5 mt-md-5">
                            <div style={{ all: 'unset' }}>
                                <img className="img-fluid  lazy-image" src={manPhoto} alt="Thinker" style={{ width: '100%', height: '100%', position: 'absolute', objectFit: 'inherit', top: '0px', left: '0px', opacity: 1, transition: 'filterBrightness 2250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, filterSaturate 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0s' }} />
                                <div style={{ width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BDFaq;