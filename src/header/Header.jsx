import React from 'react';
import headerImg from "../assets/images/headerImg.jpeg"
import "./header.css"
function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Jos Huynh</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className = "headerImg" src={headerImg} alt="" />
        </div>
    );
}

export default Header;