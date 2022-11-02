import React, { useState, useEffect } from "react";

import "./HomeTopSection.css";

export default function HomeTopSection() {
    // change image according to window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const CakeImage =
        windowWidth >= 1200
            ? "images/cake__main7.png"
            : "images/main_mobile.png";

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <div className="home-top-section">
                <div className="container-main">
                    <div className="column">
                        <div className="main-text">
                            <img
                                src="svg/logo2.svg"
                                alt="sweet deer logo"
                                class="logo-main"
                            />
                            <p>
                                Miluji sladké, přírodu a&nbsp;technologie.
                                Pracuji v&nbsp;IT odvětví a&nbsp;ve volném čase
                                se věnuji věcem, které mě naplňují. Moje
                                cukrářské výtvory zatím nejsou dokonalé, ale
                                jednou budou.
                            </p>
                            <div className="top-buttons">
                                {/* <a href="\" className="button">
                                    <span className="span">
                                        Oblíbené recepty
                                    </span>
                                </a> */}
                                <div
                                    className="button"
                                    onClick={() =>
                                        window.location.replace(
                                            "/#oblibene-dorty"
                                        )
                                    }
                                >
                                    <span>Oblíbené recepty</span>
                                </div>
                                <a href="\" className="button">
                                    <span className="span">Náhodný recept</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="main-image">
                            <img src={CakeImage} alt="dort" className="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
