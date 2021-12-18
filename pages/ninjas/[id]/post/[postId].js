import {useRouter} from 'next/router' 
// export const getStaticPaths = async () => {
//   //tactical notes 1o november 2021
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/');
//   const data = await res.json();
//   const paths = data.map(ninja=>{
//       return {
//           params: {id:ninja.id.toString()}
//       }
//   })
//   return {
//     paths, fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts');
//   const data = await res.json();
//   return {
//       props: { posts: data, id:id }
//   }
// }

// function getPostDetail(list, postId) {
//   let listDetail = ""
//   for (let i=0;i<list.length();i++) {
//     if (list[i].id==postId){
//       listDetail = list[i]
//     }
//   }
//   return listDetail;
// }

const postIDDetail= ({props}) => {
    const router = useRouter()
    const {id, postId} = router.query
    // console.log("Tes postId ",postId)
    // const postDetail = getPostDetail(props.posts, postId)
    return (
        <div>
        <h1>Post Pages id detail on Ninja Page</h1>
              <div>
                  <h3>ID ninja {id}</h3>
                    <p>productId {postId}</p>
              </div>
      </div>
    )
}

export default postIDDetail;