import React from 'react';
import Button from "../../Button/Button.jsx"

const About_Card = () => {
  return (
    <div className='about_card'>
        <div className='about_card_title_container'>
            <h3 className='about_card_title'>Hey !</h3>
        </div>
        <div className='about_card_avatar_container'>
            <img src="../../../../public/assets/AVATAR.webp" alt="Avatar 3D" className='about_card_avatar'/>
        </div>
        <div className='about_card_button_container'>
          <Button onClick={() => alert("Bouton cliqué !")}>Cliquez moi</Button>
        </div>
    </div>
  );
};

export default About_Card;
