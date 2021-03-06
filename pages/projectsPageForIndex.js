import Navbar from "../components/Navbar"
import styles from "../styles/ProjectIndex.module.css"
import Image from 'next/image'
import projectdata from "../data/projectsdata"
import Link from 'next/link'
import Menu from '../components/Menu'

const Projects = () => {
  return (
      <div className={styles.container}>
        <Navbar/>
        
        <div className={styles.title}>
          Projects
        </div>
        
        <div className={styles.wrapper}>
          {projectdata.map(item =>
            ( <div key={item.title} className={styles.box}>
                <div className={styles.img}>
                  <Image src={item.img} alt="" layout="fill"  />
                </div>
                <div className={styles.info}>
                  <div className={styles.projecttitle}>
                    {item.title}
                  </div>
                  <div className={styles.projectinfo}>
                    {item.description}
                  </div>
                  <div className={styles.buttons}>
                    <button className={styles.livedemobutton}>
                      <Link href={item.livelink}>
                      Live demo
                      </Link>
                    </button>
                    {item.title != "FourEyesGh" && 
                    <button className={styles.githubbutton}>
                      <Link href={item.github}>
                      Github
                      </Link> 
                    </button>}
                  </div>
               </div>
              </div>))} 
        </div>
      </div>
  )
}

export default Projects