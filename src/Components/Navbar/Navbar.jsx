import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'


function Navbar() {
    const [isToggled , setToggle] = useState(false);

    function handToggle(){
        setToggle(!isToggled)
    }

  return (
    <nav>
        <div classname={styles.container}>
            <div className={styles.nav_con}>
            <div className={styles.logo}>
            <a href='#' className={styles.portfolioLink}>PORTFOLIO</a>
            </div>
                <ul>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='https://drive.google.com/file/d/1oXTzv6zTTfrmAkWTktU-JdUfrMTt_ITp/view' target='blank'>Resume</a></li>
                </ul>
                <div className={styles.button}>
                    <a href='#'>Hire Me</a>
                </div>

            </div>
            {/* Mobile Menu */}
            <FaBars className={styles.bars} onClick={handToggle}/>
            {isToggled ? (
                <>
                <ul className={styles.mobile_menu}>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className={styles.mobile_botton}>
                <a href='#'>Hire Me</a>
                </div>
                </>

            ): null}
        </div>
    </nav>
  )
}

export default Navbar