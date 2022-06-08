import Navbar from "../components/Navbar"
import styles from "../styles/Projects.module.css"
import Image from 'next/image'
import projectdata from "../data/projectsdata"
import Link from 'next/link'

const Projects = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
        <div className={styles.title}>
        Projects
        </div>
        <div className={styles.wrapper}>
          {projectdata.map(item =>
            (<div className={styles.box}>
              <div className={styles.img}>
                <Image src={item.img} alt="" width={450} height={250} />
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