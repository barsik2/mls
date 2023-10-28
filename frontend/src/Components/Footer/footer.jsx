
import styles from "./styles.module.css";
import LogoFooter from "./footer.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.blockPartner}>
            <p className={styles.partner}>Наши партеры: </p>
            <p className={styles.partner_name}>Федеральная служба аккредитации (Росаккредитация)</p>
        </div>
        <div>
            <img className={styles.image} src={LogoFooter} alt="Цифровой прорыв" />
        </div>

    </div>
  );
};

export default Footer;
