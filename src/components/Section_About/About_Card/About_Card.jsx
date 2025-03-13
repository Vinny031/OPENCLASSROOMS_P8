import React from 'react';
import Button_Generic from "../../Button_Generic/Button_Generic.jsx"
import './About_Card.scss'

const About_Card = () => {
  return (
    <div className='about_card'>
        <div className='about_card_title_container'>
            <h3 className='about_card_title'>Hey !</h3>
        </div>
        <div className='about_card_avatar_container'>
            <img src="../../../../public/assets/AVATAR.webp" alt="Avatar 3D" className='about_card_avatar'/>
        </div>
        <div className='button_generic_container'>
          <Button_Generic onClick={() => alert("Bouton cliqué !")}>Cliquez moi</Button_Generic>
        </div>
    </div>
  );
};

export default About_Card;
