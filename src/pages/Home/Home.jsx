import Header from "@/components/Header/Header.jsx"
import Footer from "@/components/Footer/Footer.jsx"
import About from "@/components/Section_About/Section_About.jsx"
import Projects from "@/components/Section_Projects/Section_Projects.jsx"
import Skills from "@/components/Section_Skills/Section_Skills.jsx"
import Contact from '@/components/Section_Contact/Section_Contact.jsx'

import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Portfolio";
     }, []);

    return (
        <div className="homepage_body" id="home">
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
};

export default Home;