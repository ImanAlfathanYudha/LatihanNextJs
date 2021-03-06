import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Next NinjaList | Home</title>
        <meta name="keyword" content="ninjas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <a
            href="https://www.youtube.com/user/rynkuangel"
            className={styles.card}
          >
            <h2>Yo Legends &rarr;</h2>
            <p>
              Be kind to one another. Jangan lupa subsrcibe utk konten berikutnya.
            </p>
          </a>
          <a
            href="https://localhost:8080"
            className={styles.card}
          >
            <h2>Angular mis&rarr;</h2>
            <p>
              Angular MIS
            </p>
          </a>
          <a href="https://www.instagram.com/ravenerza" className={styles.card}>
            <h2>Instagram &rarr;</h2>
            <p>Portofolio.</p>
          </a>
          <Link href="/ninjas"><a className={styles.card}>
            <h2>Ninja versi Card &rarr;</h2>
            <p>Versi card</p>
          </a></Link>
        </div>
        <div>
          <h1 className={styles.title}>About &rarr;</h1>  
          <p className={styles.text}>Proyek preketek: manusia tulang lunak.</p>
          <p className={styles.text}>Proyek preketek: manusia tulang lunak.</p>
        </div>
      </main>
      <Link href="/ninjas">
      <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
    </>
  )
}
