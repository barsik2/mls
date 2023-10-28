import React from "react";
import styles from "./styles.module.css";

const ButtonDescription = ({ isClickable }) => {
  return (
    <div className={styles.btn_description}>
        <button
            className={`${styles.button} ${isClickable ? styles.clickable : styles.notClickable}`}
            disabled={!isClickable}
        >
            Анализ описания
        </button>
    </div>

  );
};

export default ButtonDescription;
