import {useState} from 'react'

function CommentsPage() {
    const [comments, setComment] = useState([])
    const [inputComment, setCommentInput] = useState('')
    var htmlButtonLoadComment = ""

    const fetchComments = async()=>{
        const response = await fetch('/api/comment/comments')
        const data = await response.json()
        setComment(data)
        console.log("Tes fetchComments ", data)
    }

    const submitComment = async()=>{
        console.log("Tes submitComment invoked")
        const response = await fetch('/api/comment/comments',{
            method:'POST',
            body: JSON.stringify({inputComment}),
            headers:{
                'Content-Type':'application/json'
            }
        },
        window.alert("Comment berhasil diinput"),fetchComments())
        const data = await response.json()
        console.log("Tes submitComment data ", data)
    }

    const deleteComment = async (commentId) =>{
        const response = await fetch('/api/comment/'+commentId,{
            method:'DELETE'
        })
        const data = await response.json()
        console.log("Tes deleteComment data ", data)
        fetchComments()
    }

    if (comments.length==0){
        htmlButtonLoadComment = <div><button onClick={fetchComments}>Load Comment</button></div>
    }
    return (
        <>
        <div>
        <input type='text' value={inputComment} onChange={e=>setCommentInput(e.target.value)}></input>
        <button onClick={submitComment}>Submit Comment</button>
        </div>
        {htmlButtonLoadComment}
        {
            comments.map((comment) => {
                return(
                    <div key={comment.id}>
                    {comment.id} | {comment.text}
                    <button onClick={()=>deleteComment(comment.id)}>Delete</button>
                </div>
                )
            })        
        }
        </>
    )
}

export default CommentsPage;