import React from 'react';
import logo from "../../logo/e-C1.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <header>
                <div className="container">
                
                <div className="row">
                    <div className="col-4">
                    <div className="logo">
                        <img src={logo} alt="" srcset=""/>
                    </div>
                    </div>
                    <div className="col-8">
                    <div className="nav-link">
                        <ul className="nav ">
                            <li><a href="/course">Courses</a></li>
                            <li><a href="/overview">Overview Orders</a></li>
                            <li><a href="/manage">Manage Invertory</a></li>
                        </ul>
                    </div>
                    </div>
                </div>

                </div>
            </header>
            
        </div>
    );
};

export default Header;