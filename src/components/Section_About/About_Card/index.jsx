import React from 'react';

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
            <button className='about_card_button'>Click me</button>
        </div>
    </div>
  );
};

export default About_Card;
