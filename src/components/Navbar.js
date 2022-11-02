import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "./logo.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark);

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    console.log(logo);

    return (
        <>
            <nav className="navbar">
                <div className="nav-header flex">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        {/* <img
                            src="svg/logo.svg"
                            alt="sweet deer logo"
                            
                        /> */}
                        <img src={logo} class="logo" alt="sweet deer logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* <FontAwesomeIcon icon={faBars} /> */}
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <Link
                                to="/"
                                className="link"
                                onClick={closeMobileMenu}
                            >
                                Domů
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dorty"
                                className="link"
                                onClick={closeMobileMenu}
                            >
                                Dorty
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/vanocni-cukrovi"
                                className="link"
                                onClick={closeMobileMenu}
                            >
                                Vánoční cukroví
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ostatni"
                                className="link"
                                onClick={closeMobileMenu}
                            >
                                Ostatní
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
