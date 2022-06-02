import {useRouter} from 'next/router' 

export async function getStaticProps(context) {
    const id = context.params.newsId;
    console.log("Tes regenerating news detail id ", id)
    const res = await fetch('http://localhost:4000/news/'+id);
    const data = await res.json();
    console.log("Tes data ", data)
    if (!data.id) {
        return {
            notFound:true
        }
    }
    return {
        props: { newsArticleDetail: data},
        revalidate:10,
    }
}

//fallback kalo true
export async function getStaticPaths() {
    return {
        paths: [{
            params:{
                newsId:'1'
            }
        }], fallback: true
    }
}

//fallback kalo false
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

const NewsArticleDetail= ({newsArticleDetail}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading product...</h1>
    }
    console.log("Tes newsArticleDetail ",newsArticleDetail)
    return (
        <div>
        <h1>Article Pages Detail &#x2611;</h1>
              <div>
              <h3>{newsArticleDetail.id} {newsArticleDetail.title}</h3>
                <p> {newsArticleDetail.description}</p>
              </div>
      </div>
    )
}

export default NewsArticleDetail
