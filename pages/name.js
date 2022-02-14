import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify POC</title>
        <meta name="description" content="Amplify POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Name from api: {data.name}</h1>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://main.d28o2wf7sgqtwu.amplifyapp.com/api/hello`)
  const data = await res.json()

  return { props: { data } }
}
