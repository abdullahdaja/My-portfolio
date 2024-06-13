import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src='src\sections\Projects\fps.png' h3='Fps game' p='an fps game using godot'/>
        <ProjectCard src='src\sections\Projects\mario_clone.png' h3='Mario clone game' p='2d mario clone game using godot'/>
        <ProjectCard src='src\sections\Projects\ping.png' h3='PingPong' p='a ping pong game godot'/>
        <ProjectCard className={styles.a} src='src\sections\Projects\dis.jpeg' h3='DiscordBot' p='discord bot using nodejs'/>
      </div>
    </section>
  );
}

export default Projects;
