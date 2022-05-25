import Head from 'next/head'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'

const About= () => {
    return (
      <>
      <Head>
        <title>About</title>
        <meta name="keyword" content="ninjas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <title>About This Project</title>
          {/* <h1 className={styles.aboutTitle}>About</h1>   */}
          <h1 className='content-about'>About</h1>
          <p>Proyek preketek: manusia tulang lunak.</p>
          <p>Proyek preketek: manusia tulang lunak.</p>
        </div>
        </>  
    )
}

export default About;

About.getLayout = function PageLayout(page) {
  return (<>
    {page}
    <Footer/>
    </>
  )
}