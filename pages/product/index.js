import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import ListLink from '../../comps/list-link';

export async function getStaticProps() {
    console.log("Tes generating / regenerating product list")
    const res = await fetch('http://localhost:4000/product');
    const data = await res.json();
    return {
        props: { products: data},
        revalidate:10,
    }
}

function ProductList ({products}) {
    return (
        <>
        <h1>List of Product</h1>
        {products.map((product)=>{
            return (
                <div key={product.id}>
                {/* <Link href={`product/${product.id}`} passHref={true}><h3>{product.id} {product.title}</h3></Link> */}
                <ListLink data={product} type="product"></ListLink>
                </div>
            )
        })}       
        </>
    )
}

export default ProductList