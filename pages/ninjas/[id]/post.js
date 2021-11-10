import styles from '../../../styles/Ninjas.module.css'

export const getStaticPaths = async () => {
    //jangan lupa bikin tactical notes dan uncomment method di bawah dan apus2in console hehe..
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    // const data = await res.json();
    // const paths = data.map(ninja=>{
    //     return {
    //         params: {id:ninja.id.toString()}
    //     }
    // })
    // console.log("Tes paths ",paths)
    // return {
    //   paths, fallback: false
    // }
}

export const getStaticProps = async (context) => {
    console.log("Tes getStaticProps ", context)
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts');
    console.log("Tes res isis apa ", res)
    const data = await res.json();
    console.log("Tes data ", data)
    return {
        props: { posts: data }
    }
}

const UserPost= ({posts}) => {
    console.log("Tes posts ", posts)
    return (
        <div>
        <h1>Post Pages</h1>
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