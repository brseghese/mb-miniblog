import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o <span>Blog</span>
      </h2>
      <p>Este projeto foi desenvolvido com React JS e Firebase.</p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
