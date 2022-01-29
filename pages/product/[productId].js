import {useRouter} from 'next/router' 

export async function getStaticProps(context) {
    const id = context.params.productId;
    console.log("Tes regenerating product id ", id)
    const res = await fetch('http://localhost:4000/product/'+id);
    const data = await res.json();
    if (!data.id) {
        return {
            notFound:true
        }
    }
    return {
        props: { productDetail: data},
        revalidate:10,
    }
}

//fallback kalo true
export async function getStaticPaths() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    // data
    // const paths = data.map(post=>{
    //     return {
    //         params: {postId:post.id.toString()}
    //     }
    // })
    return {
        paths: [{
            params:{
                productId:'1'
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

const productDetail= ({productDetail}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading product...</h1>
    }
    return (
        <div>
        <h1>Product Pages Detail &#x2611;</h1>
              <div>
              <h3>{productDetail.id} {productDetail.title}</h3>
              <h4>Rp{productDetail.price}</h4>
                    <p> {productDetail.description}</p>
              </div>
      </div>
    )
}

export default productDetail
