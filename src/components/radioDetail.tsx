import React from "react";
// Styles
import styles from "./radioDetail.module.css";
// Elements
import minus from "../images/minus.png";
import plus from "../images/plus.png";

type Props = {
  coverUrl: string;
};

const RadioDetail: React.FC<Props> = ({ coverUrl }) => (
  
  <div className={styles.description}>
    <button className={styles.btn}>
      <img
        className={styles.description__icon}
        src={minus}
        alt="minus"
      />
    </button>

    <div >
      <img data-testid="url" className={styles.description__cover} src={coverUrl} alt="cover" />
    </div>

    <button className={styles.btn}>
      <img className={styles.description__icon} src={plus} alt="plus" />
    </button>
  </div>
);

export default RadioDetail;
