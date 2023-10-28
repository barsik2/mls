import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import fileSelected from "./fileSelectes.svg";
import uploadFile from "./uploadFile.svg";
import deleteFile from "./deleteFile.svg";
import background from "./background.png";

const FileUpload = ({ handleFileUpload }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const isFileUploaded = file !== null;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    handleFileUpload(true);
  };

  const handleRemoveFile = () => {
    setFile(null);
    handleFileUpload(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    setFile(selectedFile);
    handleFileUpload(true);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <p className={styles.header_upload_file}>Загрузка файла (.xlsx, .csv)</p>
      <div className={styles.btn_conteiner}>
        <button className={styles.btn_upload} onClick={() => fileInputRef.current.click()}>
            <img src={uploadFile} alt="Загрузить" />
        </button>
        {file &&
        <button className={styles.btn_upload} onClick={handleRemoveFile}>
            <img src={deleteFile} alt="Удалить" />
        </button>}
      </div>
      <div
        className={styles.conteiner_file}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!file ? (
            <div className={styles.center_info}>
                <img className={styles.img_background} src={background} alt="Выберите файл" />
                <p className={styles.text}>Для загрузки файлов перетащите их сюда.</p>
            </div>

        ) : (
          <div className={styles.file_name}>
            <img src={fileSelected} alt="Выбран файл:" />
            <p>{file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;

