import React from "react";
import "./Ingrediences.css";

export default function Ingrediences() {
    return (
        <>
            <div className="ingredience">
                <div class="ingredience-title">
                    <h1>Suroviny</h1>
                </div>
                <div class="ingredience-image-box">
                    <div className="ingerdience-item">
                        <div className="ingerdience-image">
                            <img src="images/chocolate.jpg" />
                        </div>
                        <div className="ingerdience-text">
                            <h3>Čokoláda</h3>
                            <p>Na zdobení i do těsta.</p>
                        </div>
                    </div>
                    <div className="ingerdience-item">
                        <div className="ingerdience-image">
                            <img src="images/ovoce.jpg" />
                        </div>
                        <div className="ingerdience-text">
                            <h3>Čerstvé ovoce</h3>
                            <p>Ovoce a nebo marmeláda.</p>
                        </div>
                    </div>
                    <div className="ingerdience-item">
                        <div className="ingerdience-image">
                            <img src="images/mouka.jpg" />
                        </div>
                        <div className="ingerdience-text">
                            <h3>Sypké suroviny</h3>
                            <p>Mouka, cukr, kypřící prášek.</p>
                        </div>
                    </div>
                    <div className="ingerdience-item">
                        <div className="ingerdience-image">
                            <img src="images/mleko.jpg" />
                        </div>
                        <div className="ingerdience-text">
                            <h3>Mléčné produkty</h3>
                            <p>Smetana, mascarpone a mléko.</p>
                        </div>
                    </div>
                    <div className="ingerdience-item">
                        <div className="ingerdience-image">
                            <img src="images/orechy.jpg" />
                        </div>
                        <div className="ingerdience-text">
                            <h3>Ostatní</h3>
                            <p>
                                Ořížky a kvasnice nebo droždí. Bylinky na
                                ozdobu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
