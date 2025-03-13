import Header from "@/components/Header"
import Footer from "@/components/Footer"
import About from "@/components/Section_About/Section_About.jsx"
import Projects from "@/components/Section_Projects/Section_Projects.jsx"
import Contact from '@/components/Section_Contact/Section_Contact.jsx';

import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Portfolio";
     }, []);

    return (
        <div className="homepage_body">
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
};

export default Home;