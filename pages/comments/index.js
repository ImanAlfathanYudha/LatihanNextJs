import {useState} from 'react'

function CommentsPage() {
    const [comments, setComment] = useState([])
    var htmlButtonLoadComment = ""
    const fetchComments = async()=>{
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComment(data)
        console.log("Tes fetchComments ", data)
    }
    console.log("tes barangkeles ada comments ", comments)
    if (comments.length==0){
        htmlButtonLoadComment = <button onClick={fetchComments}>Load Comment</button>
    }
    return (
        <>
        {htmlButtonLoadComment}
        {
            comments.map((comment) => {
                return(
                    <div key={comment.id}>
                    {comment.id} | {comment.text}
                </div>
                )
            })        
        }
        </>
    )
}

export default CommentsPage;