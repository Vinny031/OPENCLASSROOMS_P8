import Header from "@/components/Header"
import Footer from "@/components/Footer"
import About from "@/components/Section_About"
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
            </div>
            <Footer />
        </div>
    )
};

export default Home;