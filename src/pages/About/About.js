import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mainContainer">
      <div className={styles.about}>
        <h2>
          Sobre o <span>Blog</span>
        </h2>
        <p>Este projeto foi desenvolvido com React JS e Firebase.</p>
        <Link to="/posts/create" className="btn btn-start">
          Criar post
        </Link>
      </div>
    </div>
  );
};

export default About;
