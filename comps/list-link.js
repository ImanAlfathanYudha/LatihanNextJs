import Link from 'next/link'
import styles from '../styles/Ninjas.module.css'

const ListLink= ({data, type}) => {
    var linkHTML = <h3>-</h3>
    if (type=="product") {
        linkHTML = <Link href={`product/${data.id}`} passHref={true}><h3>{data.id} {data.title}</h3></Link>
    } else if (type=="news"){
        linkHTML = <Link href={`news/${data.id}`} passHref={true}><h3>{data.id} {data.title} | {data.category}</h3></Link>
    }
    return (
        <div key={data.id} className={styles.single}>
            {linkHTML}
        </div>
    )
}

export default ListLink;