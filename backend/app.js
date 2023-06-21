const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');



const app = express()
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "58c8e628-ee8d-4877-8e5b-40e82ccd367f" } }
            // Não senti a necessidade de esconder a chave uma vez que este projeto é por puro aprendizado
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(400).json({msg: "something went wrong"});
    }

})

app.listen(3001)