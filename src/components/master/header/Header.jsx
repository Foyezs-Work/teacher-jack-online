import React from 'react';
import HeaderTop from './HeaderTop';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <HeaderTop />
            <nav id='navigation'>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="header_logo">
                            <Link to="/index">
                                Teacher Jack
                            </Link>
                        </div>

                        <div className="header_menu">
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
                                <li>
                                    <button className="btn default-btn-round">
                                        <Link to="/">Payment</Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Header;