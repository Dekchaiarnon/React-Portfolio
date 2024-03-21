import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs , FaReact ,  FaNode , FaHtml5 ,  FaPhp , FaGithub} from 'react-icons/fa6'
function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaSquareJs />
            </li>
            <li>
                <FaHtml5 />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaPhp />
            </li>
            <li>
                <FaGithub />
            </li>
            <li>
                <FaNode />
            </li>
        </ul>
    </div>
  )
}

export default Skills