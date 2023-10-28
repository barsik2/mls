import Header from "../../Components/Header/header";
import Diagrams from "./diagrams";
import styles from "./styles.module.css";
import aboutImg from "./about.svg";
import step_1 from "./instr_1.svg";
import step_2 from "./instr_2.svg";
import step_3 from "./instr_3.svg";
import step_4 from "./instr_4.svg";
import Footer from "../../Components/Footer/footer";

const instructionMap = [
  {
    img: step_1,
    text: (
      <h1 className={styles.textBox}>
        Заполните данные о продукте в{" "}
        <b className={styles.blue}>готовую форму</b> или загрузите в{" "}
        <b className={styles.blue}>удобный шаблон</b> информацию о нескольких
        продуктах сразу!
      </h1>
    ),
  },
  {
    img: step_2,
    text: (
      <h1 className={styles.textBox}>
        Сервис ACCREDITATION WIZARD знает{" "}
        <b className={styles.blue}>все стандарты и классификаторы</b> продуктов
        из современного Российского законодательства и может помочь в заполнении
        формы
      </h1>
    ),
  },
  {
    img: step_3,
    text: (
      <h1 className={styles.textBox}>
        Получите результат анализа вашей продукции в{" "}
        <b className={styles.blue}>удобной форме</b> прямо на сайте!
      </h1>
    ),
  },
  {
    img: step_4,
    text: (
      <h1 className={styles.textBox}>
        Если вы обрабатывали файл, то вам вернется файл с обработанными данными,
        который вы сможете<b className={styles.blue}>скачать</b> для своих нужд!
      </h1>
    ),
  },
];
const about = {
  text: (
    <h1 className={styles.textBox}>
      ACCREDITATION WIZARD - это простой и удобный инструмент, испльзующий
      <b className={styles.blue}>искусственный интеллект</b> для формирования
      рекомендательных отчетов по сведениям, относящимся к испытаниям продукции,
      включая сведения о необходимых условиях испытаний, применяемых методах и
      используемом оборудовании.
    </h1>
  ),
  img: aboutImg,
};
const Container = (props) => {
  return (
    <div className={styles.container}>
      {props.text}
      <img className={styles.imgBox} src={props.img} />
    </div>
  );
};

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.text_bold}>AccreditationWizard</h1>
        <div className={styles.diagram}>
          <Diagrams />
        </div>
        <h1 className={styles.text}>О нас</h1>
        <Container text={about.text} img={about.img} />
        <h1 className={styles.text}>Инструкция</h1>
        {instructionMap.map((step) => (
          <Container text={step.text} img={step.img} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
