import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";
import { useState } from "react";
import useMedia from "../hooks/useMedia";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const mobile = useMedia("(max-width: 760px)");

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <NavLink to="/" className={styles.brand}>
          <span>Blog</span>
        </NavLink>
        {mobile && (
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
          ></button>
        )}
        <ul
          className={`${mobile ? styles.menuMobile : styles.links_list} ${
            mobileMenu && styles.menuMobileActive
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard">
                <span>@</span>
                {user.displayName.toLowerCase()}
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
