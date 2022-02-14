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
        <h1 className={styles.title}>Cat Facts, an Amplify Proof of concept</h1>

        <div className={styles.grid}>
          {data.map((fact, idx) => (
            <div key={fact._id} className={styles.card}>
              <h2>Fact #{idx + 1}</h2>
              <p>{fact.text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          powered by <a href="https://alexwohlbruck.github.io/cat-facts/">cat-facts</a>
        </div>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://cat-fact.herokuapp.com/facts`)
  const data = await res.json()

  return { props: { data } }
}
