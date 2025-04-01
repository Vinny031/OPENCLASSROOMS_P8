import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button_Generic from "../../Button_Generic/Button_Generic.jsx";
import './Contact_Form.scss';

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const form = useRef();

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Capitalisation du nom
    if (name === 'lastName') {
      setFormData({
        ...formData,
        [name]: value.toUpperCase(),
      });
    } else if (name === 'firstName') {
      // Première lettre du prénom en majuscule
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

  // Fonction de validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    // Validation des champs
    newErrors.firstName = formData.firstName.trim() === '';
    newErrors.lastName = formData.lastName.trim() === '';
    // Validation du format de l'email
    newErrors.email = !/\S+@\S+\.\S+/.test(formData.email);
    newErrors.message = formData.message.trim() === '';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    
    // Si des erreurs sont présentes, on les affiche sous forme d'alerte
    if (Object.values(newErrors).includes(true)) {
      let errorMessage = "";

      if (newErrors.firstName) errorMessage += "Le prénom est requis.\n";
      if (newErrors.lastName) errorMessage += "Le nom est requis.\n";
      if (newErrors.email) errorMessage += "Veuillez entrer un email valide.\n";
      if (newErrors.message) errorMessage += "Le message est requis.\n";

      alert(errorMessage);
      return;
    }

    setErrors(newErrors);

    // Envoi de l'email via emailjs si aucune erreur n'est détectée
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log('Email envoyé avec succès!');
        alert('Votre message a été envoyé!');
        // Réinitialisation du formulaire après envoi
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        console.log('Erreur lors de l\'envoi de l\'email:', error.text);
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
        {errors.firstName && <span className="error">Le prénom est requis.</span>}

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="NOM"
        />
        {errors.lastName && <span className="error">Le nom est requis.</span>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
        {errors.email && <span className="error">Veuillez entrer un email valide.</span>}
      </div>

      <div className="contact_form_textarea_group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
        />
        {errors.message && <span className="error">Le message est requis.</span>}
      </div>

      <div className='button_generic_container'>
        <Button_Generic type="submit">Envoyer</Button_Generic>
      </div>
    </form>
  );
};

export default Contact_Form;
