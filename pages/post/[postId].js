export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const data = await res.json();
    return {
        props: { postDetail: data}
    }
}

const postDetail= ({postDetail}) => {
    // console.log("Tes postId ",postId)
    // const postDetail = getPostDetail(props.posts, postId)
    return (
        <div>
        <h1>Post Pages Detail</h1>
              <div>
              <h3>{post.id} {post.title}</h3>
                    <p> {post.body}</p>
              </div>
      </div>
    )
}

export default postDetail
