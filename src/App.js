import React from "react";
import ScrollToTop from "react-scroll-to-top";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { getTopic } from "./data";

import "./App.css";
import "./components/Overview.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Christmas from "./pages/Christmas";
import Other from "./pages/Other";
import Error from "./pages/Error";

import Recipe from "./pages/Recipe";

function RecipeShow() {
    return (
        <div>
            <Recipe />
        </div>
    );
}

function Overwiev() {
    const { topicId } = useParams();
    const topic = getTopic(topicId);
    const category = topic.id;

    return (
        <div>
            {category === "vanocni-cukrovi" ? (
                <Christmas />
            ) : category === "dorty" ? (
                <Cakes />
            ) : category === "ostatni" ? (
                <Other />
            ) : (
                <Error />
            )}
        </div>
    );
}

export default function App() {
    return (
        <>
            <Helmet>
                <title>Sweet Deer</title>
            </Helmet>
            <Router>
                <div>
                    <ScrollToTop smooth />
                    <Navbar />

                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="*" element={<Error />} />
                        <Route path=":topicId" element={<Overwiev />} />
                        <Route
                            path=":topicId/:resourceId"
                            element={<RecipeShow />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}
