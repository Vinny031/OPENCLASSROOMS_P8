import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ERROR from "/assets/404_ERROR.svg"
import { useEffect } from "react"
import { Link } from 'react-router-dom'


const Error = () => {
    useEffect(() => {
    document.title = "Erreur | V/F Portfolio";
  }, []);

    return (
        <div className="error_body">
            <Header />
            <div className="error_container">
                <img src={ERROR} alt="Erreur 404 rouge." className="error_logo" id="error_logo"/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error_link">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
};

export default Error;