import Link from 'next/link'
import Image from 'next/image'
const Navbar= () => {
    return (
       <nav>
           <div className="logo">
                {/* <h1>Ninja List</h1> */}
                <Image src="/pantoler.png" width={128} height={77}/>
           </div>
           <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/ninjas"><a>Ninja Listing</a></Link>
           <Link href="/post"><a>Post</a></Link>
           <Link href="/css-in-js"><a>CSS JS</a></Link>
       </nav>
    )
}

export default Navbar;