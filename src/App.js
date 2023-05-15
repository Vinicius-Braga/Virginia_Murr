import React, { useEffect, useState } from "react";
import "./App.scss";

import Navgation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Information from "./components/information";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
    const [activateColor, setAtivaCor] = useState(false);

    useEffect(function () {
        function positionScroll() {
            if (window.scrollY > 10) {
                setAtivaCor(true);
              } else {
                setAtivaCor(false);
            }
        }

        window.addEventListener("scroll", positionScroll);
    }, []);

    return (
        <div className="App">
            <Navgation action={activateColor} />
            <Hero />
            <About />
            <Information />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
