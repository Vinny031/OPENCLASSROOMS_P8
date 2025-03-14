import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button_Generic from "../../Button_Generic/Button_Generic.jsx"
import './Contact_Form.scss';

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'lastName') {
      setFormData({
        ...formData,
        [name]: value.toUpperCase(),
      });
    } else if (name === 'firstName') {
      const capitalizedFirstName = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      setFormData({
        ...formData,
        [name]: capitalizedFirstName,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi de l'email avec emailjs
    emailjs
      .sendForm('service_kcwbjmd', 'template_excnu77', form.current, {
        publicKey: 'UGHvjOzTeBi97IoDi',
      })
      .then(
        () => {
          console.log('Email envoyé avec succès!');
          alert('Votre message a été envoyé!');
          // Réinitialisation du formulaire
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('Erreur lors de l\'envoi de l\'email:', error.text);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };

  return (
    <form className="contact_form" ref={form} onSubmit={handleSubmit}>
      <h3>Contactez moi !</h3>

      <div className="contact_form_input_group">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Prénom"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="NOM"
        />
      </div>

      <div className="contact_form_input_group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>

      <div className="contact_form_input_group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
        />
      </div>

      <div className='button_generic_container'>
        <Button_Generic type="submit">Envoyer</Button_Generic>
      </div>
    </form>
  );
};

export default Contact_Form;
