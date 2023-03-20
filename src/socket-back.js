import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log('Um cliente se conectou ID:' + socket.id);

    socket.on("selecionarDocumento", nomeDoc => {
        socket.join(nomeDoc)
    })

    socket.on("eventoTexto", (texto, doc) => {
        //socket.broadcast.emit("eventoTexto-cliente", texto)

        socket.to(doc).emit("eventoTexto-cliente", texto)
    })
})