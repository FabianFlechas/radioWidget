import React, { useState } from "react";
// Styles
import styles from "./radioWidget.module.css";
// Components
import RadioDetail from "./radioDetail";
// Elements
import arrow from "../images/back-arrow.png";
import swit from "../images/switch.png";

import radio from "../interfases";

interface radioProps {
  radios: radio [];
}

export const RadioWidget: React.FC<radioProps> = ({radios}:radioProps) => {

  const [play, setplay] = useState("");

  const handleclick = (e: any) => {
    console.log(e);
    setplay(e);
  };

  // Dinamic accordion function detail.
  const details = document.querySelectorAll("details");

  // Add the onclick listeners.
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  return (
    <div className={styles.radio}>

      <div className={styles.radio__header}>
        <button className={styles.btn}>
          <img
            className={styles.radio__header__icon__arrow}
            src={arrow}
            alt="arrow"
          />
        </button>
        <div className={styles.radio__header__tittle}>
          <div>STATIONS</div>
        </div>
        <button className={styles.btn}>
          <img
            className={styles.radio__header__icon__switch}
            src={swit}
            alt="swit"
          />
        </button>
      </div>

      <div className={styles.radio__list}>

        {radios.map((radio) => {
          return (
            <details key={radio.id} title="Rax">
              <summary
                className={styles.radio__list__items}
                onClick={() => handleclick(`${radio.radioName}`)}
              >
                <div> {radio.radioName} </div>
                <div className={styles.radio__list__items__freq}>
                  {radio.radioFreq}
                </div>
              </summary>
              <RadioDetail coverUrl={radio.coverUrl} />
            </details>
          );
        })}
      </div>

      <div className={styles.radio__footer}>
        <div className={styles.radio__footer__display}>CURRENTLY PLAYING</div>
        <div className={styles.radio__footer__paying}>{play}</div>
      </div>
    </div>
  );
}

export default RadioWidget;
