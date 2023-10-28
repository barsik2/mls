
import Header from "../../Components/Header/header";
import "./styles.css";

const MainPage = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <h1 className="text">
          Опишите продукцию или загрузите таблицу для анализа
        </h1>
        <div className="group_info">
          <div className="chooseProduct">
            <p className="text_chooseProduct">Группа продукции</p>
            <select className="dropdown">
              <option>Очистить</option>
              <option>Товары</option>
            </select>

            <p className="text_chooseProduct">Классификатор ОКПД 2</p>
            <select className="dropdown">
              <option>Очистить</option>
              <option>Товары</option>
            </select>

            <p className="text_chooseProduct">Классификатор ТН ВЭД ЕАЭС</p>
            <select className="dropdown">
              <option>Очистить</option>
              <option>Товары</option>
            </select>

            <p className="text_chooseProduct">Наименование</p>
            <textarea />

            <button>Анализ описания</button>
          </div>

          <div className="trebovania">
            <p>Требования к загружаемому файлу</p>
            <p>
              Скачайте файл-шаблон и заполните строки данными о товарах по
              правилам:
            </p>
            <p>
              Не вносите изменения в названия столбцов Текст текст текст текст
            </p>

            <a>Скачать шаблон табицы</a>

            <button>Анализ документа</button>
          </div>
        </div>

        <div>
          <div>
            <p>Результат классификации: </p>
            <p>Обозначение и наименование стандарта: </p>
            <p>Результат классификации: </p>
            <p>Результат классификации: </p>
            <p>Результат классификации: </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
