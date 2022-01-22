import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/product');
    const data = await res.json();
    return {
        props: { products: data}
    }
}

function ProductList ({products}) {
    return (
        <>
        <h1>List of Product</h1>
        {products.map((product)=>{
            return (
                <div key={product.id} className={styles.single}>
                <Link href={`product/${product.id}`}><h3>{product.id} {product.title}</h3></Link>
            </div>
            )
        })}       
        </>
    )
}

export default ProductList