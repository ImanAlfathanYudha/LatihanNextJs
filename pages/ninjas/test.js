import styles from '../../styles/Ninjas.module.css'
export const getStaticProps = async () => {
  //entar pas dipuka di laptop sebelah buat tactical notes.
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
  // const data = await res.json();

  // return {
  //   props: { listAlbum: data }
  // }
}

const Test= ({listAlbum}) => {
  console.log("tes listAlbum ",listAlbum)
    return (
        <div>
          <h1><b>Test</b></h1>  
          {listAlbum.map(album=>(
              <div key={album.id}>
              <a className={styles.single}>
                <h3>{album.title}</h3>
              </a>
              </div>
            ))}
        </div>
    )
}

export default Test;
// https://jsonplaceholder.typicode.com/users/1/albums