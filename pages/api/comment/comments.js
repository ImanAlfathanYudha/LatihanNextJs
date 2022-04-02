import { comments } from "../../../data/comments"

export default function handler(req, res) {
    if (req.method==='GET') {
        res.status(200).json(comments)
    } else if (req.method==='POST') {
        console.log("Tes req.method")
        const comment = req.body.inputComment
        console.log("Tes const comment ".comment)
        const newComment = {
            id:Date.now(),
            text: comment

        }
        console.log("Tes newComment ",newComment)
        comments.push(newComment)
        console.log("Tes comments final ",comments)
        res.status(200).json
    }
}