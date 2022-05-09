//api for catching all api params
export default function handler(req, res) {
    const params = req.query.params
    if (params) {
        console.log("Tes parents api params ", params)
        res.status(200).json({
            params
        })
    }
    console.log("Tes parents api params ", params)
    res.status(200).json({
        test:"Home API"
    })
}