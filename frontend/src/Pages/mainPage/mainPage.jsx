
import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/buttonAnalize";
import FileUpload from "../../Components/FileUploader/fileUploader";
import Header from "../../Components/Header/header";
import styles from "./styles.module.css";
import ButtonDescription from "../../Components/ButtonAnalyze/buttonDescription";

const MainPage = () => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [dataFilled, setDataFilled] = useState(false);
  const [productGroupes, setProductGroupes] = useState([]);
  const [standartGroupes, setStandartGroupes] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_product_groupes')
      .then(response => response.json())
      .then(data => {
        setProductGroupes(data.product_groupes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_standarts')
      .then(response => response.json())
      .then(data => {
        setStandartGroupes(data.standarts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFileUpload = (value) => {
    setIsFileUploaded(value);
  };

  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setDataFilled(selectedValue !== "Очистить");
  // };

  const handleTextareaChange = (event) => {
    const textareaValue = event.target.value;
    setDataFilled(textareaValue !== "");
  };


  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.text}>
          Опишите продукцию или загрузите таблицу для анализа
        </h1>
        <div className={styles.group_info}>
          <div className={styles.chooseProduct}>
            <p className={styles.text_chooseProduct}>Группа продукции</p>
            {/* <select className={styles.dropdown} onChange={handleSelectChange}> */}
            <select className={styles.dropdown}>
              <option className={styles.option_lenght}>Очистить</option>
              {productGroupes.map((group, index) => (
                <option className={styles.option_lenght} key={index}>{group}</option>
              ))}
            </select>

            <p className={styles.text_chooseProduct}>Стандарт</p>
            {/* <select className={styles.dropdown} onChange={handleSelectChange}> */}
            <select className={styles.dropdown}>
              <option>Очистить</option>
              {standartGroupes.map((standart, index) => (
                <option key={index}>{standart}</option>
              ))}
            </select>

            <p className={styles.text_chooseProduct}>Классификатор ОКПД 2</p>
            {/* <select className={styles.dropdown} onChange={handleSelectChange}> */}
            <select className={styles.dropdown}>
              <option>Очистить</option>
            </select>

            <p className={styles.text_chooseProduct}>Классификатор ТН ВЭД ЕАЭС</p>
            {/* <select className={styles.dropdown} onChange={handleSelectChange}> */}
            <select className={styles.dropdown}>
              <option>Очистить</option>
            </select>

            <p className={styles.text_chooseProduct}>Наименование*</p>
            <textarea
              rows={15}
              className={styles.name_input}
              placeholder="Введите наименование продукции"
              onChange={handleTextareaChange}
            />
            <ButtonDescription isClickable={dataFilled} />
          </div>

          <div className={styles.trebovania}>
            <p className={styles.requirements_file}>Требования к загружаемому файлу</p>
            <p className={styles.requirements_file_ul}>
              Скачайте файл-шаблон и заполните строки данными о товарах по
              правилам:
            </p>
            <ul>
              <li className={styles.requirements_file_li}>
                Не вносите изменения в названия столбцов Текст текст текст текст
              </li>
              <li className={styles.requirements_file}>
                поле “Наименование продукции” обязательно к заполнению;
              </li>
            </ul>

            <div className={styles.div_table}>
              <a className={styles.example_table} href="http://127.0.0.1:5000/get_template">Скачать шаблон табицы</a>
            </div>

            <FileUpload isFileUploaded={isFileUploaded} handleFileUpload={handleFileUpload} />

            <Button isFileUploaded={isFileUploaded} />

          </div>
        </div>

        <h1 className={styles.result_h}>Посмотрите, что мы нашли</h1>
        <div className={styles.container_result}>
          <div className={styles.state_result}>
            <h3 className={styles.result_classification}>Результат классификации: </h3>
            <p className={styles.text_description}>Обозначение и наименование стандарта: </p>
            <p className={styles.text_description}>Пункт/статья в ТР ТС: </p>
            <p className={styles.text_description}>Структурный элемент или объект: </p>
            <p className={styles.text_description}>Пункт/раздел стандарта: </p>
          </div>
          <div className={styles.state_result_second}>
            <h3 className={styles.result_classification}>Рекомендации: </h3>
            <ul>
              <li className={styles.li_description}>Маркировочное устройство;</li>
              <li className={styles.li_description}>Тарированный спидометр;</li>
              <li className={styles.li_description}>Прибор для измерения силы;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
