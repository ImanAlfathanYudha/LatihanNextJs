import Link from 'next/link'
import {useEffect} from 'react' 
import {useRouter} from 'next/router' 

const NotFound= () => {
    const router = useRouter()
    console.log("Tes useRouter ",useRouter)
    useEffect(()=>{
        console.log("tes useEffect run")
        setTimeout(()=>{
            // useRouter.go(1)
            router.push("/")
        },3000)
    },[])    
    return (
       <div className="not-found">
           <h1>Ooopps....</h1>
           <h2>That page can not be found.</h2>
           <p>Go back to the <Link href="/"><a>Homepage </a></Link></p>
       </div>
    )
}

export default NotFound;