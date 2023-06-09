import Head from "next/head";

import styles from "../styles/Home.module.css";
import fetchData from "../utils/getContentfulData";

export default function Home(props) {
  const { desc } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my site!</h1>
        <p>{desc}</p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetchData();

  return {
    props: {
      desc: response[0].fields.aboutMe,
    },
  };
}
