import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkRetour from "@/components/Linkretour";
import styles from "../../styles/_articles.module.scss";
import AsideNav from "@/components/AsideNav";
//import uuid
import { v4 as uuidv4 } from "uuid";
const Articles = ({ articles }) => {
  const router = useRouter();

  return (
    <section className={styles.article_section_container}>
      <div className={styles.article_div_container}>
        <h1 className={styles.article_section_h1}>Articles</h1>
        <LinkRetour retour="Retour" />
      </div>
      <div className={styles.article_section_article_div}>
        {articles.map((article) => (
          <article key={uuidv4()}>
            <Link
              className={styles.article_section_article}
              href={`/articles/${article.id.toString()}`}
            >
              <p>ARTICLE {article.id} sur 100</p>
              <p>{article.title.slice(0, 30) + " ..."}</p>
              {console.log(article.title)}

              <u> Lire la suite</u>
            </Link>
          </article>
        ))}
      </div>
      <LinkRetour retour="Retour" />
      <AsideNav />
    </section>
  );
};
//appel api jsonplaceholder
export async function getStaticProps() {
  const data2 = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data2.json();
  return {
    props: {
      articles,
    },
  };
}
export default Articles;
