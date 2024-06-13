import styles from './SkillsStyles.module.css';

import SkillList from '../../common/SkillList';

function Skills() {

  const checkMarkIcon ="https://img.icons8.com/ios-glyphs/30/FFFFFF/checked--v1.png" ;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Node" />
         <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        
        
        
     
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="GodotEngine" />
       
      
      </div>
     
  
    </section>
  );
}

export default Skills;
