import { Router } from "express";
import { buscar, inserir} from "../repository/repository.js"; 

const server = Router();


server.get('/anime/:id', (req, resp) => {
    try {
        const id = req.params.id;
        const y = buscar(id);

        resp.send({
            anime:y
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.post('/anime', async (req, resp) => {
    try {
        const busc = req.body;
        const y = await inserir(busc);

        resp.send({
            y: inserir
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

export default server;