async function clique(id) {
  const cep = document.getElementById(id).value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then((resposta) => {
    resposta.json().then((res) => {
     const resultado =  document.getElementById("resultado")
     resultado.innerHTML = ''
    resultado.innerHTML += `<h3>${res.cep}</h3>`
    resultado.innerHTML += `<h3>${res.logradouro}</h3>`
    resultado.innerHTML += `<h3>${res.complemento}</h3>`
    resultado.innerHTML += `<h3>${res.localidade}</h3>`
    resultado.innerHTML += `<h3>${res.uf}</h3>`
    resultado.innerHTML += `<h3>${res.ibge}</h3>`
    resultado.innerHTML += `<h3>${res.ddd}</h3>`
    });
  });
}

