import React from 'react';
import classes from './contact.module.css';
import banner from './contact us.jpg';

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <div className={classes.banner}>
        <img src={banner} alt="Contact Us Banner" className={classes.bannerImage} />
        <div className={classes.bannerText}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        </div>
      </div>
      <form className={classes.contactForm}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
