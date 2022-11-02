import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div class="social-media">
                    <a
                        href="https://www.instagram.com/lenka_z_ivancic/ "
                        class="icon instagram "
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="social-icon"
                            />
                        </span>
                    </a>
                    <a
                        href="https://www.facebook.com/lenka.prochazkova.52/ "
                        class="icon facebook "
                    >
                        <span>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                    </a>
                    <a
                        href="https://github.com/prochazkoval "
                        class="icon github "
                    >
                        <span>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                    </a>
                </div>
                <ul class="footer-center ">
                    <li>
                        <ul class="box ">
                            <li>
                                <a href="/">Domů</a>
                            </li>
                            <li>
                                <a href="/dorty ">Dorty</a>
                            </li>
                            <li>
                                <a href="/vanocni-cukrovi">Vánoční cukroví</a>
                            </li>
                            <li>
                                <a href="/ostatni">Ostatní</a>
                            </li>
                            {/* <li>
                                <a href="# ">O mně</a>
                            </li> */}
                        </ul>
                    </li>
                </ul>
                <div class="footer-copytight ">
                    <p>
                        Copyright &copy; 2022 Lenka Procházková. All Right
                        Reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
