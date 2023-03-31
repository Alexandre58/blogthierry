import React from "react";
import styles from "../styles/_asideNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.PNG";
import img7 from "../assets/img7.jpg";

const AsideNav = () => {
  return (
    <aside className={styles.home_aside_container}>
      <Link href={"/articles"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img1}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Les articles
      </Link>

      <Link href={"/articles/atelier"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img2}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Les ateliers
      </Link>
      <Link href={"/articles/four"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img3}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Les fours
      </Link>
      <Link href={"/articles/tour"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img4}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Les tours
      </Link>
      <Link href={"/articles/tournage"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img5}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Le tournage
      </Link>
      <Link href={"/articles/nouveauarticle"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img1}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Les news
      </Link>
      <Link href={"/web"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img6}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Le web
      </Link>
      <Link href={"/web/contact"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img7}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Contact
      </Link>
    </aside>
  );
};

export default AsideNav;
