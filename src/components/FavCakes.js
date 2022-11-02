import React from "react";
import "../App.css";
import "./FavCakes.css";
import { Link } from "react-router-dom";

export default function FavCakes() {
    return (
        <>
            <div className="favorite-cakes" id="oblibene-dorty">
                {/* <div className="cakes-grid-header font-size-20" id="bake ">
                    <h1>Oblíbené dezerty</h1>
                </div> */}
                <div className="cakes-grid">
                    <article className="cakes-article flow bg-white text-black grid-col-span-2 round-top-left-corner padding-left padding-top ">
                        <div className="flex ">
                            <div>
                                <p className="name ">OVOCNÝ DORT</p>
                                <h2 className="taste ">Lehký letní dort.</h2>
                                <Link
                                    className="more"
                                    to="/dorty/mascarpone-dort-s-ovocem"
                                >
                                    Více {"\u003E"}
                                </Link>
                                <div>
                                    <img
                                        src="images/cake_1.png "
                                        alt="Dort 1 "
                                        className="cake-image1 "
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="cakes-article flow bg-white text-black grid-col-span-3 padding-top round-top-right-corner ">
                        <div className="flex ">
                            <div>
                                <p className="name ">
                                    ZRCADLOVÁ POLEVA A OVOCE
                                </p>
                                <h2 className="taste ">
                                    Všechny barvy co si představíš.
                                </h2>
                                <Link
                                    className="more"
                                    to="/dorty/zrcadlova-poleva"
                                >
                                    Více {"\u003E"}
                                </Link>
                                <div>
                                    <img
                                        src="images/cake_321.png "
                                        alt="Dort 3 "
                                        className="cake-image3"
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="cakes-article flow bg-white text-black grid-col-span-3  padding-top ">
                        <div className="flex ">
                            <div>
                                <p className="name ">KYNUTÉ POVIDLOVÉ BUCHTY</p>
                                <h2 className="taste ">Jako od babičky.</h2>
                                <Link
                                    className="more"
                                    to="ostatni/kynute_buchty"
                                >
                                    Více {"\u003E"}
                                </Link>
                                <div>
                                    <img
                                        src="images/cake_2.png "
                                        alt="Dort 2"
                                        className="cake-image2"
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="cakes-article flow bg-white text-black grid-col-span-2 grid-row-span-2 round-bottom-right-corner padding-top padding-bottom ">
                        <div className="flex ">
                            <div>
                                <p className="name ">MARCIPÁN A JEDLÝ FIX</p>
                                <h2 className="taste ">Brněnské MHD.</h2>
                                <Link
                                    className="more"
                                    to="ostatni/marcipanove_saliny"
                                >
                                    Více {"\u003E"}
                                </Link>
                                <div>
                                    <img
                                        src="images/cake_41.png "
                                        alt="Dort 4 "
                                        className="cake-image4 "
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="cakes-article flow bg-white text-black grid-col-span-3 round-bottom-left-corner padding-top padding-bottom ">
                        <div className="flex ">
                            <div>
                                <p className="name ">VÁNOČKA</p>
                                <h2 className="taste ">Snídaně šampionů.</h2>
                                <Link className="more" to="ostatni/vanocka">
                                    Více {"\u003E"}
                                </Link>
                                <div>
                                    <img
                                        src="images/cake_5.png "
                                        alt="Dort 5 "
                                        className="cake-image5 "
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* <article className="cakes-article flow bg-white text-black grid-col-span-5 round-bottom-left-corner round-top-right-corner round-top-left-corner padding-top padding-bottom ">
                        <div className="flex ">
                            <div>
                                <img
                                    src="svg/vse.svg "
                                    alt="Dort 6 "
                                    className="cake-image6 "
                                />
                            </div>
                        </div>
                    </article> */}
                </div>
            </div>
        </>
    );
}
