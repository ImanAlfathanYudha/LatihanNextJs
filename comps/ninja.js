import Link from 'next/link'
import styles from '../styles/Ninjas.module.css'

const Ninja= ({ninja}) => {
    console.log("Tes ninja di Ninja ",ninja)
    return (
              <div key={ninja.id} className={styles.single}>
                <Link href={'/ninjas/' + ninja.id}><a><h3>{ninja.name}</h3></a></Link>
                <p>Contact:</p>
                <p>Email: {ninja.email}</p>
                <p>Phone: {ninja.phone}</p>
                <Link href={'/ninjas/' + ninja.id+'/post'} key={ninja.id}>Posts</Link>
                <br></br>
                <Link href={'/ninjas/' + ninja.id+'/post'} key={ninja.id} replace><a><b>BACK</b></a></Link>
              </div>
    )
}

export default Ninja;