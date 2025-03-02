import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ERROR from "/assets/404_ERROR.svg"
import { useEffect } from "react"
import { Link } from 'react-router-dom'


const Error = () => {
    useEffect(() => {
    document.title = "Vincent Fuseau | Erreur";
  }, []);

    return (
        <>
            <Header />
            <div className="box-of-star1">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star2">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star3">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="box-of-star4">
                <div className="star star-position1"></div>
                <div className="star star-position2"></div>
                <div className="star star-position3"></div>
                <div className="star star-position4"></div>
                <div className="star star-position5"></div>
                <div className="star star-position6"></div>
                <div className="star star-position7"></div>
            </div>
            <div className="astronaut" data-js="astro">
                <div className="head"></div>
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
                <div className="body">
                    <div className="panel"></div>
                </div>
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>
                <div className="schoolbag"></div>
            </div>
            <div className="error_container">
                <img src={ERROR} alt="Erreur 404 rouge." className="error_logo" id="error_logo"/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
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