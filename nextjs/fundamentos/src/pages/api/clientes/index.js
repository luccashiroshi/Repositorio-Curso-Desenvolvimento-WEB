export default function handler(req, res) {
    if(req.method === 'GET') {
        handleGet(req, res)
    } else {
        req.status(405).send()
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: "Maria",
        idade: 45
    })
}