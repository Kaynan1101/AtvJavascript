let app = document.getElementById("contador");

let contadorDiv = document.createElement("div");
contadorDiv.classList.add("contador");

let botaoReset = document.createElement("button-reset");
botaoReset.classList.add("botao-reset");

let imgReset = document.createElement("img");
imgReset.src = "reset.png";
imgReset.alt = "Reset";

botaoReset.appendChild(imgReset);
botaoReset.onclick = resetContador;

contadorDiv.appendChild(botaoReset);

let titulo = document.createElement("div");
titulo.classList.add("total");
titulo.innerText = "Total";

let inputTotal = document.createElement("input");
inputTotal.classList.add("input-total");
inputTotal.value = 0;
inputTotal.readOnly = true;

let secoesDiv = document.createElement("div");
secoesDiv.classList.add("secoes-container");

let homensDiv = criarSecao("Homens");
let mulheresDiv = criarSecao("Mulheres");

secoesDiv.appendChild(homensDiv);
secoesDiv.appendChild(mulheresDiv);

contadorDiv.appendChild(titulo);
contadorDiv.appendChild(inputTotal);
contadorDiv.appendChild(secoesDiv);
app.appendChild(contadorDiv);

function criarSecao(label) {
  let secaoDiv = document.createElement("div");
  secaoDiv.classList.add("secao");

  let imagem = document.createElement("img");
  imagem.src = label === "Homens" ? "men.png" : "woman.png";

  let titulo = document.createElement("div");
  titulo.innerText = label;

  let botoesDiv = document.createElement("div");
  botoesDiv.classList.add("botoes");

  let botaoMais = document.createElement("button");
  botaoMais.innerText = "+";
  botaoMais.onclick = () => alterarContagem(label, 1);

  let botaoMenos = document.createElement("button");
  botaoMenos.innerText = "-";
  botaoMenos.onclick = () => alterarContagem(label, -1);

  let input = document.createElement("input");
  input.classList.add("input-contador");
  input.value = 0;
  input.readOnly = true;
  input.id = `contador-${label.toLowerCase()}`;

  botoesDiv.appendChild(botaoMais);
  botoesDiv.appendChild(botaoMenos);

  secaoDiv.appendChild(imagem);
  secaoDiv.appendChild(botoesDiv);
  secaoDiv.appendChild(titulo);
  secaoDiv.appendChild(input);

  return secaoDiv;
}

function alterarContagem(tipo, valor) {
  let input = document.getElementById(`contador-${tipo.toLowerCase()}`);
  let total = document.querySelector(".input-total");

  let novaContagem = parseInt(input.value) + valor;
  if (novaContagem >= 0) {
    input.value = novaContagem;
    total.value = parseInt(total.value) + valor;
  }
}
function resetContador() {
  document
    .querySelectorAll(".input-contador")
    .forEach((input) => (input.value = 0));
  document.querySelector(".input-total").value = 0;
}
