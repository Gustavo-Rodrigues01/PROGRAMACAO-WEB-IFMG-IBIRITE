

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
.then(response => response.json())
.then(estados => {
    let listaEstados = "";
    estados.forEach(estado => {
        listaEstados += `<li>${estado.nome}</li>`;
    })
    document.getElementById("lista").innerHTML = listaEstados;
})
.catch(error => {
    console.error("Erro ao ler o arquivo:", error);
});