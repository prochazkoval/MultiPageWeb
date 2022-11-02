import React from "react";
import "../App.css";
import "./Overview.css";
import { Link, useParams } from "react-router-dom";

import { getTopic } from "./../data";

export default function Christmas_overview() {
    const { topicId } = useParams();
    const topic = getTopic(topicId);

    return (
        <>
            <div className="overview-container">
                <div className="wave-container">
                    <img src="svg\wave-christmas.svg" className="wave" alt="" />
                </div>
                <div className="container-content">
                    <ul>
                        <div class="overview-container-image-box just-4">
                            {topic.resources.map((sub) => (
                                <li key={sub.id}>
                                    <div className="item">
                                        <div className="overview-container-image">
                                            <img src={sub.image} alt="" />
                                        </div>
                                        <div className="view-blog">
                                            <p>{sub.name}</p>
                                            <h3>{sub.description}</h3>
                                            <p>{sub.specingred}</p>
                                            <p>{sub.ingred}</p>
                                            <Link to={sub.id}>Vice</Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="writte-quote-cakes">
                    <div className="quote ">
                        <p className="quote-text">
                            Vune Vanoc me vraci do detstvi.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
