import React from 'react';
import './topbar.css'
import avatar from '../../assets/images/avatar.jpeg'
function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="topImg" src={avatar} alt="" />
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default TopBar;