import React from "react";
import "./OneRecipe.css";
import { getResource } from "./../../data";
import { useParams } from "react-router-dom";

// import data from "../../data.json";
function Ingred() {
    const { topicId, resourceId } = useParams();
    const {
        ingred_cream,
        number_ingred_cream,
        ingred_corpus,
        number_ingred_corpus,
    } = getResource({
        topicId,
        resourceId,
    });

    return (
        <div className="ingred">
            <div className="corpus">
                <h3>Korpus</h3>
                <div className="ingred_array">
                    <p className="numbers background_grey numeber_space">
                        {number_ingred_corpus}
                    </p>
                    <p className="ingredText background_grey ingred_text_space">
                        {ingred_corpus}
                    </p>
                </div>
            </div>
            <div className="cream">
                <h3>Krem</h3>
                <div className="ingred_array">
                    <p className="numbers background_grey numeber_space">
                        {number_ingred_cream}
                    </p>
                    <p className="ingredText background_grey ingred_text_space">
                        {ingred_cream}
                    </p>
                </div>
            </div>
        </div>
    );
}

function RecipeImages() {
    const { topicId, resourceId } = useParams();
    const { image_detail } = getResource({
        topicId,
        resourceId,
    });

    return image_detail.map((image) => (
        <img className="image_recipe" src={image} alt="" />
    ));
}

function RecipeProcess() {
    const { topicId, resourceId } = useParams();
    const { process } = getResource({
        topicId,
        resourceId,
    });
    return process.map((step) => (
        <p className="background_grey text_space paragraph">{step}</p>
    ));
}

function QRcode() {
    const { topicId, resourceId } = useParams();
    const { qr } = getResource({
        topicId,
        resourceId,
    });

    return (
        <div className="qr-desktop">
            <img className="qr_image" src={qr} alt="QR-kod" />
        </div>
    );
}

function Advice() {
    const { topicId, resourceId } = useParams();
    const { advice } = getResource({
        topicId,
        resourceId,
    });

    return (
        <div className="writte grey_col">
            <div className="quote">
                <p className="quote-text-rec text_18 quote-black">
                    {"Poznámky, zkušenosti a doporučení: "}
                    {advice}
                </p>
            </div>
        </div>
    );
}

export default function OneRecipe() {
    const { topicId, resourceId } = useParams();
    const { name, qr, number, ingred, advice, column } = getResource({
        topicId,
        resourceId,
    });

    return (
        <div className="one-recipe">
            {/* //home top section */}
            <div className="box-recipe">
                {/* container main */}
                <div className="side first">
                    {column === "one_col" ? (
                        <div className="image_row one_col">
                            <RecipeImages />
                        </div>
                    ) : (
                        <div className="image_row two_col">
                            <RecipeImages />
                        </div>
                    )}
                </div>
                <div className="side second">
                    <h1 className="uppercase red_left letterspace">
                        <span> {name}</span>
                    </h1>
                    <h2 className="uppercase top_space bottom_space">
                        Ingredience
                    </h2>
                    {topicId === "dorty" ? (
                        <Ingred />
                    ) : (
                        <div className="ingred_array">
                            <p className="numbers background_grey numeber_space">
                                {number}
                            </p>
                            <p className="ingredText background_grey ingred_text_space">
                                {ingred}
                            </p>
                        </div>
                    )}

                    <h2 className="uppercase top_space bottom_space">Postup</h2>
                    <RecipeProcess />
                    {/* no advice => do not show this part */}
                    {advice !== "" ? <Advice /> : <p className="hidden"></p>}
                    {/* <h2 className="uppercase top_space bottom_space">
                        Rady a doporučení
                    </h2>
                    <div className="writte">
                        <div className="quote">
                            <p className="quote-text">{advice}</p>
                        </div>
                    </div> */}

                    {/* show QR code just on desktop view */}
                    {qr !== "" ? <QRcode /> : <p className="hidden"></p>}
                </div>
                <div className="side third">
                    {column === "one_col" ? (
                        <div className="image_row one_col">
                            <RecipeImages />
                        </div>
                    ) : (
                        <div className="image_row two_col">
                            <RecipeImages />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
