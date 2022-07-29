import React from 'react';
import { Link } from 'react-router-dom';
import affiliation1 from "../../../assets/images/affilaition/micro_language.png"
import affiliation2 from "../../../assets/images/affilaition/putschool.com.gif"
import affiliation3 from "../../../assets/images/affilaition/bnbing.cn.png"

import phone from "./../../../assets/images/icon/phone.png";
import email from "./../../../assets/images/icon/email.png";
import skype from "./../../../assets/images/icon/skype.png";
import weChat from "./../../../assets/images/icon/wechat.png";
import QQ from "./../../../assets/images/icon/qq.png";


const Footer = () => {
    return (
        <footer id='footer_section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="header_logo">
                            <Link to="/index">
                                Teacher Jack
                            </Link>
                        </div>
                        <div className="footer_social">
                            <ul>
                                <li>
                                    <a href="/#">
                                        <div>
                                            <img src={phone} alt="phone" />
                                        </div>
                                        <span>1.214.736.5989</span>
                                    </a>

                                </li>
                                <li>
                                    <a href="/#">
                                        <div>
                                            <img src={email} alt="email" />
                                        </div>
                                        <span>teacherjackonline@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <div>
                                            <img src={skype} alt="skype" />
                                        </div>
                                        <span> ABAACORP LTD </span>
                                    </a>

                                </li>
                                <li>
                                    <a href="/#">
                                        <div>
                                            <img src={weChat} alt="weChat" />
                                        </div>
                                        <span> Jack2147365989</span>
                                    </a>

                                </li>
                                <li>
                                    <a href="/#">
                                        <div>
                                            <img src={QQ} alt="QQ" />
                                        </div>
                                        <span>  3396883165 </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className="footer_titel">{}</h5>
                        <div className="">
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
                        <h5 className="footer_titel">Affiliation</h5>

                        <div className="footer_menulist">
                            <ul>
                                <li>
                                    <img src={affiliation1} alt="Affiliation 1" />
                                </li>
                                <li>
                                    <img src={affiliation2} alt="Affiliation 2" />
                                </li>
                                <li>
                                    <img src={affiliation3} alt="Affiliation 3" />
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className="footer_titel">Resources</h5>
                        <div className="">
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