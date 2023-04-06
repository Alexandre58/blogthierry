import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import RetourneAdresse from "@/components/RetourneAdresse";
import React from "react";
import styles from "../../styles/_[user].module.scss";

const User = ({ user }) => {
  console.log(user);

  return (
    <section className={styles.users_section_container}>
      <div className={styles.users_div_container}>
        <h1 className={styles.users_section_h1}>
          Atelier: {user.name} {user.username}
        </h1>
      </div>
      <article className={styles.users_section_article}>
        <h2>{user.email}</h2>
        <div className={styles.users_section_article_div_adresse}>
          <p>
            <span>
              <u>Téléphone:</u>
            </span>{" "}
            {user.phone}
          </p>
          <p>
            <span>
              <u>Site Web:</u>{" "}
            </span>
            {user.website}
          </p>
          <h3>
            <span>
              <u>Adresse:</u>
            </span>
          </h3>
          <p className={styles.users_section_article_div_adresse_p}>
            {user.address.city}
          </p>
          <p className={styles.users_section_article_div_adresse_p}>
            {user.address.street}
          </p>
          <p className={styles.users_section_article_div_adresse_p}>
            {user.address.suite}
          </p>
        </div>
      </article>
      <AsideNav />
      <LinkRetour retour={"Retour à l'accueil"} />
      <RetourneAdresse retour={"Retour vers les adresses"} />
    </section>
  );
};

//POUR AFFICHER DES PAGES POUR CHAQUE UTILISATEUR  getStaticPath() GETsTATICpROPS()
export async function getStaticProps(context) {
  const id = context.params.user;
  const data2 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data2.json();
  return {
    props: {
      user,
    },
  };
}
export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await data.json();

  const paths = users.map((item) => ({
    params: {
      user: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default User;
