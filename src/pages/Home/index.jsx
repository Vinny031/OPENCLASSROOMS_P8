import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Accueil";
     }, []);

    return (
        <div>
            <Header />
            <div className="homepage-body">
            </div>
            <Footer />
        </div>
    )
};

export default Home;