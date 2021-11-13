//Buat bikin halaman ninja yg isinya post milik user(get list post by user)
import styles from '../../../styles/Ninjas.module.css'
export const getStaticPaths = async () => {
    //tactical notes 1o november 2021
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    const paths = data.map(ninja=>{
        return {
            params: {id:ninja.id.toString()}
        }
    })
    return {
      paths, fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts');
    const data = await res.json();
    return {
        props: { posts: data, id:id }
    }
}

const UserPost= ({posts, id}) => {
    console.log("Tes posts ", posts)
    return (
        <div>
        <h1>Post Pages {id}</h1>
          {posts.map(post=>(
              <div key={post.id} className={styles.single}>
                  <h3>{post.title}</h3>
                    <p>{post.body}</p>
              </div>
          ))}
      </div>
    )
}

export default UserPost;
// https://jsonplaceholder.typicode.com/users/1/albums