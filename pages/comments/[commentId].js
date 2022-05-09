import { comments } from "../../data/comments"

function Comment({comment}) {
    return(
        <div>
            {comment.id} | {comment.text}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                commentId:'1'
            }
        },
        {
            params: {
                commentId:'2'
            }
        },
        {
            params: {
                commentId:'3'
            }
        }
        ], fallback: true
    }
}

//pake pre-rendering
export async function getStaticProps(context) {
    const { params } = context;
    const { commentId } = params;
    const comment = comments.find((comment)=>comment.id === parseInt(commentId))
    console.log("Tes getStaticProps comment ", comment)
    return {
        props: { comment, }
    }
}

export default Comment