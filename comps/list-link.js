import Link from 'next/link'
import styles from '../styles/Ninjas.module.css'

const ListLink= ({data, type}) => {
    var linkHTML = <h3>-</h3>
    if (type=="product") {
        linkHTML = <Link href={`product/${data.id}`} passHref={true}><h3>{data.id} {data.title}</h3></Link>
    } else if (type=="news"){
        linkHTML = <Link href={`news/${data.id}`} passHref={true}><h3>{data.id} {data.title} | {data.category}</h3></Link>
    } else if (type=="event"){
        linkHTML = <div><h2>
            {data.id} {data.title} {data.date} | {data.category}
        </h2>
        <p>{data.description}</p><hr/></div>
    }
    return (
        <div key={data.id} className={styles.single}>
            {linkHTML}
        </div>
    )
}

export default ListLink;