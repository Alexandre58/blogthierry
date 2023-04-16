import React from "react";
import Link from "next/link";
import styles from "../../styles/_users.module.scss";
import LinkRetour from "@/components/Linkretour";
import Image from "next/image";
import img7 from "../../public/images/img7.jpg";
import AsideNav from "@/components/AsideNav";
//import uuid
import { v4 as uuidv4 } from "uuid";
import RetourneAdresse from "@/components/RetourneAdresse";
const AllUsers = ({ users }) => {
  return (
    <section className={styles.users_section_container}>
      <div className={styles.users_div_container}>
        <h1 className={styles.users_section_h1}>Liste des ateliers</h1>
      </div>
      <article className={styles.users_section_article}>
        <Image
          className={styles.users_Images}
          src={img7}
          alt="Picture of the author"
          width={640}
          height={427}
        />
        {users.map((user) => (
          <div key={uuidv4()} className={styles.users_section_article_map_div}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>

            <Link href={`users/${user.id}`}>
              <u>Contacter cette atelier</u>
            </Link>
          </div>
        ))}
      </article>
      <LinkRetour retour="Retour" />
      <AsideNav />
    </section>
  );
};
//appel api jsonplaceholder
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
export default AllUsers;
