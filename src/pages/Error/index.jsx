import Header from "@/components/Header/Header.jsx"
import Footer from "@/components/Footer"
import Astronaut from "@/components/Astronaut"
import { useEffect } from "react"
import { Link } from 'react-router-dom'


const Error = () => {
    useEffect(() => {
    document.title = "Vincent Fuseau | Erreur";
  }, []);

    return (
        <>
            <Header />
            <div className="error-body">
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <div className="error-container">
                    <p className="error">4</p>
                    <Astronaut />
                    <p className="error">4</p>
                </div>
                <Link to="/" className="come-back-button">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="come-back-button-text">Revenez à la maison</span>
                </Link>
            </div>
            <Footer />
        </>
    )
};

export default Error;