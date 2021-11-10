
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    
    const paths = data.map(ninja=>{
        return {
            params: {id:ninja.id.toString()}
        }
    })
    console.log("Tes paths ",paths)
    return {
      paths, fallback: false
    }
}

export const getStaticProps = async (context) => {
    console.log("Tes getStaticProps ", context)
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    return {
        props: { ninja: data }
    }
}

const Details= ({ninja}) => {
    console.log("Tes ninja ", ninja)
    return (
        <div>
            <h1>Details Page</h1>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}

export default Details;
// https://jsonplaceholder.typicode.com/users/1/albums