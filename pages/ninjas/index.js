import Link from 'next/link'
const Ninjas= () => {
    return (
        <div>
          <h1>All Ninjas</h1>  
          <Link href="/ninjas/test">
            <a>Test tist</a>
          </Link>
        </div>
    )
}

export default Ninjas;