import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App for Copier</title>
        <meta name="description" content="For test Copier app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Server for test Copier app</h1>

        <p className={styles.description}>Route POST: /api/login</p>
        <p>Receive body:</p>
        <code>
          &#123;email: &quot;raul@gmail.com&quot;, password:
          &quot;123456&quot;&#125;
        </code>
        <p>Returns: </p>
        <code>&#123;id, token&#125;</code>
        <p className={styles.description}>Route GET: /api/xml</p>
        <p>Returns: xml file</p>
      </main>
    </div>
  );
}
