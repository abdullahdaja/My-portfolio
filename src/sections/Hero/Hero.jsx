import styles from './HeroStyles.module.css';



function Hero() {

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.Hero}>
          <img className={styles.hero}  src='./sections/Hero/me.jpg' ></img>
              <h1>Abdullah </h1><br></br>
              <h1>Hussein </h1>
              <hr></hr>
              <h2>im a computer science student</h2>

                    <p className={styles.info}>I’m a 21-year-old computer science student.
                       I’m currently pursuing my bachelor’s degree in computer science</p>
                      <button>Resume</button>
                       <hr></hr>
               <a href='https://www.facebook.com/profile.php?id=100004203614722&locale=ar_AR' target='blank'>
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new"/>
              </a>
              
              <a href='https://www.facebook.com/profile.php?id=100004203614722&locale=ar_AR' target='blank'>
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/>
              </a>

              
     </div>
    </section>
  );
}

export default Hero;
