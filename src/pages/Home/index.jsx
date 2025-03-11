import Header from "@/components/Header"
import Footer from "@/components/Footer"
import About from "@/components/Section_About"
import Projects from "@/components/Section_Projects"
import Contact from '@/components/Section_Contact';

import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Accueil";
     }, []);

    return (
        <div>
            <Header />
            <div className="homepage-body">
                <About />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    )
};

export default Home;