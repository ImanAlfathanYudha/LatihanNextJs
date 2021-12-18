import styles from '../../styles/Ninjas.module.css'
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { posts: data}
    }
}

function PostList ({posts}) {
    return (
        <>
        <h1>List of Post</h1>
        {posts.map((post)=>{
            return (
                <div key={post.id} className={styles.single}>
                <Link href={`post/${post.id}`}><h3>{post.id} {post.title}</h3></Link>
            </div>
            )
        })}       
        </>
    )
}

export default PostList