import React from 'react';
import phone from "./../../../assets/images/icon/phone.png";
import email from "./../../../assets/images/icon/email.png";
import skype from "./../../../assets/images/icon/skype.png";
import weChat from "./../../../assets/images/icon/wechat.png";
import QQ from "./../../../assets/images/icon/qq.png";

const Header = () => {
    return (
        <React.Fragment>
            {/* header top section start */}
            <section id="header-top">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="header_top_content_left">
                            <a href="/#">
                                <img src={phone} alt="phone" />
                                <span>1.214.736.5989</span>
                            </a>
                            <a href="/#">
                                <img src={email} alt="email" />
                                <span>teacherjackonline@gmail.com</span>
                            </a>
                        </div>
                        <div className="header_top_content_right">
                            <a href="/#">
                                <img src={skype} alt="skype" />
                                <span> ABAACORP LTD </span>
                            </a>
                            <a href="/#">
                                <img src={weChat} alt="weChat" />
                                <span> Jack2147365989</span>
                            </a>
                            <a href="/#">
                                <img src={QQ} alt="QQ" />
                                <span>  3396883165 </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* header top section close */}
        </React.Fragment>
    );
};

export default Header;