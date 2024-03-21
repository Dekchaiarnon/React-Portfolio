import React from 'react';
import styles from './Services.module.css';
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6';

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
          <FaCode />
          <h4>Web Development</h4>
          <p>
          Develop web applications using React + Vite, JavaScript and PHP.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaPaintbrush />
          <h4>Web Design</h4>
          <p>
          Utilize design tools for web design such as Adobe XD and Figma.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaDesktop />
          <h4>Front-end Consulting</h4>
          <p>
          Understand the principles, processes, or services related to the development and design of the Front-end portion of websites or applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
