import React from 'react';
import styles from "./styles.module.css";

const Button = ({ isFileUploaded }) => {
  return (
    <div className={styles.div_btn}>
      <button
        className={styles.btn_analize_document}
        disabled={!isFileUploaded}
        style={{
          backgroundColor: isFileUploaded ? 'white' : 'white',
          color: isFileUploaded ? 'black' : 'gray',
          cursor: isFileUploaded ? 'pointer' : 'not-allowed',
        }}
      >
        {isFileUploaded ? 'Анализ документа' : 'Анализ документа'}
      </button>
    </div>
  );
};

export default Button;

