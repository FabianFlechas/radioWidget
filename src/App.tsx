import React  from "react";

// Styles
import styles from "./App.module.css";

// Components
import RadioWidget from './components/radioWidget';


function App() {

  return (
    <div  className={styles.main}>      
      <RadioWidget />
      
      <div className={styles.Badge}>
           <div className={styles.Badge__header}> 
               
           </div>

           <div className={styles.Badge__section__name}>
                <img 
                className={styles.Badge__avatar}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHzuB3Tc7U3Rg/profile-displayphoto-shrink_800_800/0/1519336288080?e=1619049600&v=beta&t=rj0pglYe4pPHM5w6I79R858r54QXf2YeWdbsJuVp-wg"
                alt="Avatar"/>
               <h1>FABIAN  <br /> FLECHAS</h1>
           </div>

           <div className={styles.Badge__section__info}>
             <a href="mailto: flechasfabian@gmail.com">flechasfabian@gmail.com </a>
                +91 9121540913                
           </div>

           <div className={styles.Badge__footer}>
               #Begreat
           </div>
       </div>
    </div>
  );
}

export default App;
