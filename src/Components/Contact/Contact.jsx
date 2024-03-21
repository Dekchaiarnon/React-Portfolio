import React, { useState } from 'react';
import styles from './Contact.module.css';
import Swal from 'sweetalert2';
import { FaPhone, FaEnvelope, FaLine } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields.'
      });
      return;
    }
    // Handle form submission logic here
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'This is just a sample website. Please contact us via email or the contact form below.'
    });
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>
          If you need to contact, please contact via phone number, email, and Line ID below.
          </p>
          <p className={styles.contact_address}>
            745 Main Street <br />
            KhonKaen, Thailand
          </p>
          <br />
          <p>
            <FaPhone /> 064-864-8124{' '}
          </p>
          <p>
            <FaEnvelope /> arnon.mangkai@gmail.com{' '}
          </p>
          <p>
            <FaLine /> nongtumz
          </p>
        </div>
        <div className={styles.contact_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <div>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder='eg. First Name'
                />
              </div>
              <div>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder='eg. Last Name'
                />
              </div>
            </div>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='eg. yourname@gmail.com'
            />
            <label htmlFor='message'>Your message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              cols='30'
              rows='10'
              placeholder='Type Here'
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
