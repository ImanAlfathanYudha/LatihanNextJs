import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}
const Ninjas= ({ninjas}) => {
    return (
        <div>
          <h1>All Ninjas</h1>
          <Link href="/ninjas/test">
            <a>Test tist</a>
          </Link>
            {ninjas.map(ninja=>(
              <div className={styles.single}>
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}><a><h3>{ninja.name}</h3></a></Link>
                <Link href={'/ninjas/' + ninja.id+'/post'} key={ninja.id}>Posts</Link>
              </div>
            ))}
        </div>
    )
}

export default Ninjas;