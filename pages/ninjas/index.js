import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'
import Ninja from '../../comps/ninja';
import UserPost from './[id]/post';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas= ({ninjas}) => {
  console.log("Tes ninjas apaan ", ninjas)
    return (
        <div>
          <h1>All Ninjas</h1>
          <Link href="/ninjas/test" passHref={true}>
            <a>Test tist</a>
          </Link>
            {ninjas.map((ninja)=>{
              return(
                <div key={ninja.id}>
                  <Ninja ninja={ninja}></Ninja>
                </div>
              )
              })}
        </div>
    )
}

export default Ninjas;