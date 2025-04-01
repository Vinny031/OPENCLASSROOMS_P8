import Header from "@/components/Header/Header.jsx"
import Footer from "@/components/Footer/Footer.jsx"
import "./Error.scss"
import { useEffect } from "react"
import { Link } from 'react-router-dom'


const Error = () => {
    useEffect(() => {
        document.title = "Vincent Fuseau | Erreur";
    }, []);

    return (
        <div className="error-body">
            <Header />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className="error-container">
                <img src="/assets/icon/404.webp" alt="404 Error" className="error-image" />
            </div>
            <Link to="/" className="come-back-button">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="come-back-button-text">Revenez à la maison</span>
            </Link>
            <Footer />
        </div>
    )
};

export default Error;