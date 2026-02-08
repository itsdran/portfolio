import { useState, useEffect } from "react";

import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Career from '../Career/Career'
import TechStack from '../TechStack/TechStack'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Profile darkMode={darkMode} />
            <About />
            <Career />
            <Project />
            <Contact />
            <TechStack />
            <Footer />
        </>
    );
}

export default App;
