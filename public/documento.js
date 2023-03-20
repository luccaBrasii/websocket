const socket = io();


//Definindo 'salas' para o socket//
const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get("nome")

const tituloDocumento = document.getElementById("titulo-documento")
tituloDocumento.textContent = nomeDocumento || "Documento sem título";

socket.emit("selecionarDocumento", nomeDocumento)
//

const texto = document.getElementById("editor-texto")


texto.addEventListener('keyup', () => {
    socket.emit("eventoTexto", texto.value, nomeDocumento)
})

socket.on("eventoTexto-cliente", textoEvento => {
    texto.value = textoEvento
})