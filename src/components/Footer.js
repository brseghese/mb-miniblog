import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Blog &copy; 2022 | By ❤️ <span>Bruno Seghese</span>
      </p>
    </footer>
  );
};

export default Footer;
