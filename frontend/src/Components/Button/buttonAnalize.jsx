import React from 'react';
import styles from "./styles.module.css";

const Button = ({ isFileUploaded, selectedFile }) => {

  const handleUpload = () => {
    if (isFileUploaded) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://127.0.0.1:5000/processing', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Ошибка при загрузке файла: ', error);
        });
    };
  }

  return (
    <div className={styles.div_btn}>
      <button
        className={styles.btn_analize_document}
        disabled={!isFileUploaded}
        onClick={handleUpload}
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

