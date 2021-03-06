import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import ListLink from '../../comps/list-link'

export async function getServerSideProps() {
    console.log("Tes generating / regenerating product list")
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();
    return {
        props: { articles: data}
    }
}

function NewsArticleList ({articles}) {
    return (
        <>
    <h1>News Article List</h1>
    {articles.map((article)=>{
            return (
                <div key={article.id}>
                {/* <Link href={`news/${article.id}`} passHref={true}><h2>{article.id} {article.title} | {article.category}</h2></Link> */}
                <ListLink data={article} type="news"></ListLink>
                </div>
            )
        })}       
    </>
    )
}

export default NewsArticleList