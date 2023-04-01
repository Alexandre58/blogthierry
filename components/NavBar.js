import Link from "next/link";
import React from "react";
import styles from "../styles/_navbar.module.scss";
const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar_Nav_container}>
        <Link href={"/"} className={styles.navbar_Nav_link}>
          Accueil
        </Link>
        <Link href={"/web"} className={styles.navbar_Nav_link}>
          Web
        </Link>
        <Link href={"/contact"} className={styles.navbar_Nav_link}>
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
