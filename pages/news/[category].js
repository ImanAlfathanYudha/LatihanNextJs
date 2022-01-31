import styles from '../../styles/Ninjas.module.css'

// export async function getServerSideProps(context) {
//     console.log("Tes generating / regenerating news list")
//     const {params} = context;
//     const {category} = params
//     console.log("Tes generating / regenerating news list category ", category)
//     const res = await fetch('http://localhost:4000/news?category='+category);
//     const data = await res.json();
//     return {
//         props: {
//             articles: data,
//             category,
//         },
//     }
// }

export async function getServerSideProps(context) {
    const { params } = context
    const { category } = params
    console.log("Tes regenerating product id ", category)
    const response = await fetch(
        `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()
    console.log("Tes data ",data)
    // if (!data.id) {
    //     return {
    //         notFound:true
    //     }
    // }
    return {
            props: {
            articles: data,
            category,
            },
    }
}

// export async function ArticleListByCategory({articles,category}) {
//     var listArticle = articles
//     console.log("Tes  ArticleListByCategory articles ",listArticle," category ",category)
//     return (
//         <>
//         <h1>Showing news Category <i>{category}</i></h1>
//         {
//             listArticle.map(article=>{
//             return (
//                 <div key={article.id} className={styles.single}>
//                 <h2>{article.id} | {article.title}</h2>
//                 <p>{article.description}</p>
//                 </div>
//             )
//         })
//          }  
//         </>
//     )
// }

function ArticleListByCategory({articles,category}) {
    return (
      <>
       <h1>Showing news Category <i>{category}</i></h1>
        {
        articles.map(article => {
          return (
            <div key={article.id} className={styles.single}>
              <h2>
                {article.id} {article.title}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        })
        }
      </>
    )
  }
  

export default ArticleListByCategory
