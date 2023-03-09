function verificar_datos(titulo, titulo_oblig) {
    let resp = false;
    if (!titulo.trim()) {
        titulo_obliga.textContent = 'No es posible publicar un post sin título';

        setTimeout(() => {
            titulo_oblig.textContent = '';
        }, 2000)
        resp = true;
    }
    return resp;
}

export default verificar_datos;