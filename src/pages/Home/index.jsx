import Header from "@/components/Header"
import Footer from "@/components/Footer"
import About from "@/components/Section_About"
import Projects from "@/components/Section_Projects"
import Contact from '@/components/Section_Contact';

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