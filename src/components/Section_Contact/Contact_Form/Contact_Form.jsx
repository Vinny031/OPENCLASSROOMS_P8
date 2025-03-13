import React, { useState } from 'react';
import Button_Generic from "../../Button_Generic/Button_Generic.jsx"
import './Contact_Form.scss'

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

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
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
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
      <Button_Generic onClick={() => alert("Bouton cliqué !")}>Envoyer</Button_Generic>
    </div>
    </form>
  );
};

export default Contact_Form;
