import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'

function Portfolio() {
    
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://i.ibb.co/C10Cx1W/Screenshot-2567-03-13-at-10-15-11-0.png" alt="" />
            </Tilt>
                <p>Mobile Food Delivery Application</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://i.ibb.co/64qNyvT/Screenshot-2567-03-13-at-10-15-47-0.png" alt="" />
            </Tilt>
                <p>Mobile Food Delivery Application</p>
            </div>
            <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://i.ibb.co/pXrX9Wg/Screenshot-2567-03-13-at-10-16-02-0.png" alt="" />
            </Tilt>
            <p>Mobile Food Delivery Application</p>
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio