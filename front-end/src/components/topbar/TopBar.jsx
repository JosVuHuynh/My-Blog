import React from 'react';
import './topbar.css'
import avatar from '../../assets/images/avatar.jpeg'
import { Link } from 'react-router-dom';
function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {/* <Link className="link" to="/" >LOGOUT</Link> */}
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {   
                    user ? (
                        <img className="topImg" src={avatar} alt="" />
                ):(   
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login" >
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register" >
                                    REGISTER
                                </Link>
                            </li>
                           
                        </ul>
                )}
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default TopBar;