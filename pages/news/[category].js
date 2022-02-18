import styles from '../../styles/Ninjas.module.css'

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    console.log("Tes header ", req.headers.cookie)
    console.log("Tes query ", query)
    res.setHeader('Set-Cookie',['cookie=Vishwas'])
    const { category } = params
    console.log("Tes regenerating product id ", category)
    const response = await fetch(
        `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()
    console.log("Tes data ",data)
    return {
            props: {
            articles: data,
            category,
            },
    }
}

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
