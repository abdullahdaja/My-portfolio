import styles from '../sections/Projects/ProjectsStyles.module.css';
function ProjectCard({ src,  h3, p }) {
  return (
   <div className={styles.a}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      </div>
  );
}

export default ProjectCard;
