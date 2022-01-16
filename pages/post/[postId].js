import {useRouter} from 'next/router' 

export async function getStaticProps(context) {
    const id = context.params.postId;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    console.log("Tes getStaticProps klo fallback true", id)
    const data = await res.json();
    if (!data.id) {
        return {
            notFound:true
        }
    }
    console.log("Tes getStaticProps klo fallback true", id)
    return {
        props: { postDetail: data}
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    data
    const paths = data.map(post=>{
        return {
            params: {postId:post.id.toString()}
        }
    })
    return {
        paths: paths, fallback: true
    }
}

// export async function getStaticPaths() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     const paths = data.map(post=>{
//         return {
//             params: {postId:post.id.toString()}
//         }
//     })
//     return {
//         paths: paths, fallback: false
//     }
// }

const postDetail= ({postDetail}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading, om...</h1>
    }
    return (
        <div>
        <h1>Post Pages Detail &#x2611;</h1>
              <div>
              <h3>{postDetail.id} {postDetail.title}</h3>
                    <p> {postDetail.body}</p>
              </div>
      </div>
    )
}

export default postDetail
