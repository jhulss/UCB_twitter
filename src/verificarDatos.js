function verificar_datos(titulo, titulo_obligatorio) {
    let resp = false;
    if (!titulo.trim()) {
        titulo_obligatorio.textContent = 'No es posible publicar un post sin título';

        setTimeout(() => {
            titulo_obligatorio.textContent = '';
        }, 2000)
        resp = true;
    }
    return resp;
}

export default verificar_datos;