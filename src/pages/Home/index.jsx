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
            <h1>Home Page</h1>
            <p>Bienvenue to the Home Page</p>
            <Footer />
        </div>
    )
};

export default Home;