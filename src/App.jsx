import Navbar from "./composant/Navbar";
import Hero from "./composant/Hero";
import About from "./composant/About";
import Skills from "./composant/Skills";
import Projects from "./composant/Projects";
import Services from "./composant/Services";
import Contact from "./composant/Contact";
import Footer from "./composant/Footer";

import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <Hero />

                <About />

                <Skills />

                <Projects />

                <Services />

                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
