import React, { useState } from 'react';
import { courseProcessingData } from '../../assets/datas/courseProcessingData';
import ModalVideo from 'react-modal-video'
import courseBanner from "../../assets/images/common/courseBanner.png"
const BDCoruseModule = () => {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className="course-criteria-section mb-5 mt-5" style={{}}>
            <div className="container">
                <h3 className="section-title text-center fw-bold mt-5 mt-md-0 mb-5">Coruse Title</h3>
                <div className="row">
                    <div className="col-lg-5 mb-5">
                        <div className="enroll-card preview-card shadow p-3 p-md-4 p-lg-3 pb-md-5">
                            <div className="preview text-center">
                                <img className="img-fluid w-100 lazy-image dark-theme-enroll-img" src={courseBanner} alt="Teacher Jack Online English Coruse" style={{ paddingTop: '0px' }} />
                                <div className="play-icon">
                                    <div title onClick={() => setOpen(true)} role="button" aria-label="animation" tabIndex={0} style={{ width: '100%', height: '100%', overflow: 'hidden', margin: '0px auto', outline: 'none' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" width={92} height={92} preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}>
                                            <defs>
                                                <clipPath id="__lottie_element_2">
                                                    <rect width={92} height={92} x={0} y={0} />
                                                </clipPath>
                                                <linearGradient id="__lottie_element_9" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-133.99200439453125" y1="-0.0010000000474974513" x2="132.38400268554688" y2="-0.0010000000474974513">
                                                    <stop offset="0%" stopColor="rgb(252,94,81)" />
                                                    <stop offset="50%" stopColor="rgb(249,126,99)" />
                                                    <stop offset="100%" stopColor="rgb(245,158,117)" />
                                                </linearGradient>
                                            </defs>
                                            <g clipPath="url(#__lottie_element_2)">
                                                <g transform="matrix(0.18148908019065857,0,0,0.18148908019065857,46,46)" opacity="0.8" style={{ display: 'block' }}>
                                                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                                        <path fill="rgb(255,255,255)" fillOpacity={1} d=" M0,-159.93600463867188 C0,-159.93600463867188 0,-159.93600463867188 0,-159.93600463867188 C88.26899719238281,-159.93600463867188 159.8260040283203,-88.37899780273438 159.8260040283203,-0.10999999940395355 C159.8260040283203,-0.10999999940395355 159.8260040283203,0.10999999940395355 159.8260040283203,0.10999999940395355 C159.8260040283203,88.37899780273438 88.26899719238281,159.93600463867188 0,159.93600463867188 C0,159.93600463867188 0,159.93600463867188 0,159.93600463867188 C-88.26899719238281,159.93600463867188 -159.8260040283203,88.37899780273438 -159.8260040283203,0.10999999940395355 C-159.8260040283203,0.10999999940395355 -159.8260040283203,-0.10999999940395355 -159.8260040283203,-0.10999999940395355 C-159.8260040283203,-88.37899780273438 -88.26899719238281,-159.93600463867188 0,-159.93600463867188z" />
                                                    </g>
                                                </g>
                                                <g transform="matrix(0.18311473727226257,0,0,0.18311473727226257,45.99852752685547,46.00018310546875)" opacity={1} style={{ display: 'block' }}>
                                                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                                        <path fill="url(#__lottie_element_9)" fillOpacity={1} d=" M-133.18800354003906,0.07699999958276749 C-133.18800354003906,-73.48699951171875 -73.40799713134766,-133.27999877929688 0,-133.27999877929688 C73.40799713134766,-133.27999877929688 133.18800354003906,-73.48699951171875 133.18800354003906,0.07699999958276749 C133.18800354003906,73.48699951171875 73.40799713134766,133.27999877929688 0,133.27999877929688 C-73.40799713134766,133.27999877929688 -133.18800354003906,73.48699951171875 -133.18800354003906,0.07699999958276749z" />
                                                    </g>
                                                </g>
                                                <g transform="matrix(0.18623191118240356,0,0,0.18623191118240356,47.891334533691406,46.00018310546875)" opacity={1} style={{ display: 'block' }}>
                                                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                                        <path fill="rgb(255,255,255)" fillOpacity={1} d=" M38.56800079345703,13.565999984741211 C39.981998443603516,12.151000022888184 41.78300094604492,9.96500015258789 42.167999267578125,9.451000213623047 C44.224998474121094,6.750999927520752 45.25299835205078,3.4079999923706055 45.25299835205078,0.07699999958276749 C45.25299835205078,-3.6649999618530273 44.09700012207031,-7.13700008392334 41.9109992980957,-9.96500015258789 C41.731998443603516,-10.144000053405762 41.380001068115234,-10.527000427246094 40.92300033569336,-11.024999618530273 C40.06800079345703,-11.956000328063965 38.840999603271484,-13.293000221252441 37.667999267578125,-14.465999603271484 C27.12700080871582,-25.7810001373291 -0.38600000739097595,-44.29800033569336 -14.784000396728516,-49.95600128173828 C-16.969999313354492,-50.84400177001953 -22.49799919128418,-52.78499984741211 -25.454999923706055,-52.91400146484375 C-28.283000946044922,-52.91400146484375 -30.982999801635742,-52.270999908447266 -33.55400085449219,-50.98500061035156 C-36.768001556396484,-49.183998107910156 -39.3390007019043,-46.35499954223633 -40.75400161743164,-43.012001037597656 C-41.65399932861328,-40.698001861572266 -43.06700134277344,-33.75400161743164 -43.06700134277344,-33.625 C-44.481998443603516,-26.038000106811523 -45.25299835205078,-13.694000244140625 -45.25299835205078,-0.06400000303983688 C-45.25299835205078,12.935999870300293 -44.481998443603516,24.753000259399414 -43.32500076293945,32.46799850463867 C-43.292999267578125,32.5 -43.18199920654297,33.051998138427734 -43.0099983215332,33.909000396728516 C-42.487998962402344,36.51499938964844 -41.400001525878906,41.944000244140625 -40.2400016784668,44.16999816894531 C-37.4119987487793,49.56999969482422 -31.882999420166016,52.91400146484375 -25.9689998626709,52.91400146484375 C-25.9689998626709,52.91400146484375 -25.454999923706055,52.91400146484375 -25.454999923706055,52.91400146484375 C-21.597999572753906,52.78499984741211 -13.49899959564209,49.44200134277344 -13.49899959564209,49.3129997253418 C0.12800000607967377,43.654998779296875 26.99799919128418,26.038999557495117 37.797000885009766,14.338000297546387 C37.797000885009766,14.338000297546387 38.56800079345703,13.565999984741211 38.56800079345703,13.565999984741211z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="timer text-center  my-3">This $49 'infopack' is your ultimate guideline <br /> for your home-based tutoring</div>

                        </div>
                    </div>
                    <div className="criterias col-lg-7 px-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='enroll-card preview-card shadow p-3 p-md-4 p-lg-3 pb-md-5'>
                                    <h3>Course-1</h3>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='enroll-card preview-card shadow p-3 p-md-4 p-lg-3 pb-md-5'>
                                    <h3>Course-1</h3>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                    <h6>Coruse Content</h6>
                                </div>
                            </div>
                        </div>

                        {/* <div className="course-criterias">
                            <div className="mb-4">
                                <ul className="list-unstyled w-100 row">
                                    {
                                        courseProcessingData.length > 0 && courseProcessingData.map((module, index) => (
                                            <li className="col-md-6">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" />
                                                </svg>
                                                <span>{module.details}</span>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </div>
    );
};

export default BDCoruseModule;