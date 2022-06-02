import {useRouter} from 'next/router' 

export async function getStaticProps(context) {
    const id = context.params.newsId;
    console.log("Tes regenerating news detail id ", id)
    const res = await fetch('http://localhost:4000/news/'+id);
    const data = await res.json();
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

const NewsArticleDetail= ({newsArticleDetail}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading product...</h1>
    }
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
