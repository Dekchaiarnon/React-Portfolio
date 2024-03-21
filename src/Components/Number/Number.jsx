import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
function Number() {
  return (
    <div className={styles.number_con}>
        <div className={styles.number_items}>
            <h1>
            Working Experience
            </h1>
            
        </div>
        <div className={styles.number_items}>
            <h3>
            <VisibilitySensor partialVisibility offset={{ bottom: 200}}>
                    {({isVisible})=>(
                        <div>
                           {isVisible ? <CountUp start={2000} end={2022} duration={5} /> : null}-{isVisible ? <CountUp start={2000} end={2023} duration={5} /> : null}
                        </div>
                    )}

                </VisibilitySensor>
            </h3>
            <p>Business Intelligence Internship</p>
        </div>
        <div className={styles.number_items}>
            <h3>
            <VisibilitySensor partialVisibility offset={{ bottom: 200}}>
                    {({isVisible})=>(
                        <div>
                           {isVisible ? <CountUp start={2000} end={2023} duration={5} /> : null}-{isVisible ? <CountUp start={2000} end={2024} duration={5} /> : null}
                        </div>
                    )}

                </VisibilitySensor>
            </h3>
            <p>Front-End Developer</p>
        </div>

    </div>
  )
}

export default Number