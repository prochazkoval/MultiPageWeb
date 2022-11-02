import React from "react";
import "./../App.css";
import FavCakes from "../components/FavCakes";
import HomeTopSection from "../components/HomeTopSection";
// import Ingrediences from "../Ingrediences";
import Principles from "../components/Principles";
// import Technology from "../Technology";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            {/* top section
                favourite cakes
                principles
                ingrediences
                technology
            */}
            <HomeTopSection />
            <FavCakes />
            <Principles />
            {/* <Technology />
            <Ingrediences /> */}

            <Footer />
        </>
    );
}
