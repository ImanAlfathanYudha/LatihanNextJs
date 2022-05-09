//api for catching all api params
export default function handler(req, res) {
    const params = req.query.params
    if (params) {
        res.status(200).json({
            params
        })
    }
    console.log("Tes parents api params empty ", params)
    res.status(200).json({
        test:"Home API"
    })
}