import React, { useState } from "react";
// Styles
import styles from "./radioWidget.module.css";
// Components
import RadioDetail from "./radioDetail";
// Elements
import arrow from "../images/back-arrow.png";
import swit from "../images/switch.png";

function RadioWidget() {

  const state = {
    radios: [
      {
        id: "1",
        radioName: "Putin FM",
        radioFreq: "66,6",
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/6/67/ELO_Time_expanded_album_cover.jpg",
      },
      {
        id: "2",
        radioName: "Dribbble FM",
        radioFreq: "101,2",
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/2/28/ELO.SM.1983.3.gif",
      },
      {
        id: "3",
        radioName: "Doge FM",
        radioFreq: "101,2",
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b9/DarkHorseCover.jpg",
      },
      {
        id: "4",
        radioName: "Ballads FM",
        radioFreq: "99,4",
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/e/e8/Dragon_Fly_%28Jefferson_Starship_album_-_cover_art%29.jpg",
      },
      {
        id: "5",
        radioName: "Maximum FM",
        radioFreq: "142,2",
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Cars_-_Heartbeat_City.jpg",
      },
    ],
  };

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

        {state.radios.map((radio) => {
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
