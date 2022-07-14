import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id='footer_section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="header_logo">
                            <Link to="/index">
                                Teacher Jack
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className="footer_titel">Manta</h5>
                        <div className="footer_menulist">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Coruses</Link>
                                </li>
                                <li>
                                    <Link to="/">How It Works</Link>
                                </li>
                                <li>
                                    <Link to="/">Testimonials</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <h5 className="footer_titel">Services</h5>
                        <div className="footer_menulist">
                            <ul>
                                <li>
                                    <Link to="/home">English Communication Development for Kids</Link>
                                </li>
                                <li>
                                    <Link to="/">English Communication Development for Adults</Link>
                                </li>
                                <li>
                                    <Link to="/">Business English Certificate (BEC) Preparation</Link>
                                </li>
                                <li>
                                    <Link to="/">IELTS Preparation</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className="footer_titel">Resources</h5>
                        <div className="footer_menulist">
                            <ul>
                                <li>
                                    <Link to="/home">Blogs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="footer_copyright text-center">
                    &copy; {new Date().getFullYear()} TeacherJack.Online | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;