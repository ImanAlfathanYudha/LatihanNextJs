import {useRouter} from 'next/router' 

function Doc() {
    const router = useRouter()
    const {params=[]} = router.query
    console.log("Tes params ",params)
    if (params.length==2){ 
        return (
            <div>
            <h1>Viewing docs for features {params[0]} and concept {params[1]}</h1>
            </div>
        )
        
    } else if (params.length==1) {
        return (
        <div>
            <h1>Viewing docs for features {params[0]}.</h1>
        </div>
        )
    } else {
        return (
            <div>
            <h1>DOCS home page</h1>
            <p>{params}</p>
          </div>
        )
    }
}

export default Doc;