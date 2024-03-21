import React from 'react'
import styles from './Hero.module.css'
import { FaGithub , FaLinkedinIn , FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi , it's me</p>
                    <h3 className={styles.text_2}>Arnon Mangkai</h3>
                    <p className={styles.text_3}>
                        <span style={{marginRight: '10px'}}> I'm a </span>
                        <TypeAnimation
                                sequence={[
                                    
                                    ' Front-end Developer',
                                    2000, 
                                    'Web Developer',
                                    2000,
                                    'Mobile Developer',
                                    2000,

                                ]}
                                speed={50}
                                repeat={Infinity}
                                />
                       
                    </p>
                    <p className={styles.text_4}>
                    Hello, my name is Tum. I am currently looking for a job as a Front-end developer.<br /> My current skills include front-end development for both web applications and mobile applications, mainly using React, PHP, and React Native.<br /> I am also interested in Back-end development, although I am not yet highly proficient in it. <br />I am currently living in Khon Kaen and would prefer a job that is either hybrid or work from home. <br />I expect a salary of 20,000 Baht. Thank you.
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href='https://github.com/Dekchaiarnon/' target='blank'> <FaGithub /></a></li>
                        <li><a href='https://www.linkedin.com/in/arnon-mangkai-61b0342bb/' target='blank'> <FaLinkedinIn /></a></li>
                        <li><a href='https://web.facebook.com/profile.php?id=100010717453919' target='blank'> <FaFacebookF /></a></li>
                        
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_img}></div>  
                </Tilt>             
            </div>
        </div>      
    </div>
  )
}

export default Hero