//Buat bikin halaman ninja yg detail (get user detail)
import {useRouter} from 'next/router' 
import styles from '../../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    
    const paths = data.map(ninja=>{
        return {
            params: {id:ninja.id.toString()}
        }
    })
    console.log("Tes paths ",paths)
    return {
      paths, fallback: false
    }
}

export const getStaticProps = async (context) => {
    console.log("Tes getStaticProps ", context)
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    return {
        props: { ninja: data }
    }
}

const Details= ({ninja}) => {
    console.log("Tes ninja ", ninja)
    const router = useRouter()
    const ninjaId = router.query.id
    //tactical notes. adding handleclick 26 Nov 2021
    const handleClick = ()=> {
        router.push('/ninjas/'+ninjaId+'/post')
    }
    return (
        <div>
            <h1>Details Page {ninjaId}</h1>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
            <a className={styles.btnPost} href="" onClick={handleClick}>Post</a>
        </div>
    )
}

export default Details;
// https://jsonplaceholder.typicode.com/users/1/albums