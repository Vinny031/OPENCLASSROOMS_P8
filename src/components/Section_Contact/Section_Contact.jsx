import React from 'react';
import Contact_Form from './Contact_Form/Contact_Form.jsx';
import './Section_Contact.scss'

const Section_Contact = () => {
  return (
    <section className="section_contact" id='contact'>
      <div className='section_contact_title'>
        <h2>Contact</h2>
      </div>
      <div className='contact_form_container'>
        <Contact_Form />
      </div>
    </section>
  );
};

export default Section_Contact;
