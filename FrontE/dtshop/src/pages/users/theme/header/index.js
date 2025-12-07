import { memo } from 'react';
import './style.scss';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Header = () => {
    return (
        <div className='header__top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header__top_left'>
                        <ul>
                            <li><MdOutlineEmail />tinhlv219@gmail.com</li>
                            <li>Liên hệ: ngay 24/7</li>
                        </ul>






                    </div>
                    <div className='col-6 header__top_right'>
                        <ul>
                            <li>    
                                <FaSquareFacebook />
                            </li>
                            <li>
                                <IoLogoInstagram />
                            </li>
                            <li>    
                                <span><FaUserCircle />Đăng nhập</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>    
        </div>
    );
};

export default memo(Header);