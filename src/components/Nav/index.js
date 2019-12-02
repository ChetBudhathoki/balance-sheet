import React from "react";
import "./style.css";


function Nav(props) {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav className="uk-navbar-container" uk-navbar style={{ position: 'relative; z-index: 980' }}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav" style={{
                        navIcon: `url(${props.navIcon})`}}>
                        <li className="uk-active"><a href="#">Home</a></li>
                        <li>
                            <a href="#">Parent</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><a href="#">Active</a></li>
                                    <li><a href="#">Item</a></li>
                                    <li><a href="#">Item</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

