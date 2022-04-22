import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Prismic and Next.js Overview</strong>
            <p>Welcome to the developer documentation for Prismic and Next.js. Here we ll show you where to get started in learning how these two technologies work together.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Prismic and Next.js Overview</strong>
            <p>Welcome to the developer documentation for Prismic and Next.js. Here we ll show you where to get started in learning how these two technologies work together.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Prismic and Next.js Overview</strong>
            <p>Welcome to the developer documentation for Prismic and Next.js. Here we ll show you where to get started in learning how these two technologies work together.</p>
          </a>
        </div>
      </main>
    </>
  );
}