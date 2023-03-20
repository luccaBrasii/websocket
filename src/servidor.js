import express from "express";
import url from "url";
import path from "path";
//
import http from "http";
import { Server } from "socket.io"

const app = express()
const port = process.env.port || 3000

//PARA ULTILIZAR OS AQUIVOS HTML CSS ETC:
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));
//

//SOCKET.IO
const servidorHttp = http.createServer(app)

servidorHttp.listen(port, () => {
    console.log('http://localhost:3000/');
})

const io = new Server(servidorHttp);


export default io;

