import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import fps from "./fps.png";
import dis from "./dis.jpeg";
import mario from "./mario_clone.png";
import ping from "./ping.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={fps} h3='Fps game' p='an fps game using godot'/>
        <ProjectCard src= {mario} h3='Mario clone game' p='2d mario clone game using godot'/>
        <ProjectCard src={ping} h3='PingPong' p='a ping pong game godot'/>
        <ProjectCard className={styles.a} src={dis} h3='DiscordBot' p='discord bot using nodejs'/>
      </div>
    </section>
  );
}

export default Projects;
