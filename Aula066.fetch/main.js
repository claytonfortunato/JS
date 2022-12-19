//Fetch envia requisições assíncronas para o servidor. 
// Serve para acessarmos/escrevermos dados em apis externas.

fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
  .then(r => r.json())
  .then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
});

const data = {
    id: "andrerafa",
    nome: "Andre",
    email: "andrerafa@origamid.com",
    senha: "123456",
    cep: "123456",
    rua: "Ali Perto",
    numero: "230",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro"
  };

fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(data)
});