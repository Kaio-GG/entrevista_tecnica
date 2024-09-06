import express  from 'express';
import { Request, Response } from 'express';  
import cors from 'cors'
import axios from "axios";


const server = express();


const PORT = process.env.PORT || 5000

server.use(cors())



server.get("/produto", async (req: Request, res: Response)=>{
    try {
        let resp = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        res.json(resp.data);
    } catch (error: any) {
        console.warn(error.message)
    }
})


server.listen(PORT, ()=>{
    console.log(`api online na porta: ${PORT}`)
})
