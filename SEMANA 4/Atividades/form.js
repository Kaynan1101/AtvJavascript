function Pessoa(nome, email, nascimento, tel, celular, matricula) {
  this.nome = nome;
  this.email = email;
  this.nascimento = nascimento;
  this.tel = tel;
  this.celular = celular;
  this.matricula = matricula;

  this.exibir = function () {
    return `Dados:\nNome: ${this.nome}\nEmail: ${this.email}\nNascimento: ${this.nascimento}\nTelefone Fixo: ${this.tel}\nCelular: ${this.celular}\nMatrícula: ${this.matricula}`;
  };
}

function Aluno(nome, email, nascimento, tel, celular, matricula, curso) {
  Pessoa.call(this, nome, email, nascimento, tel, celular, matricula);
  this.curso = curso;
}

function Professor(
  nome,
  email,
  nascimento,
  tel,
  celular,
  matricula,
  area,
  lattes
) {
  Pessoa.call(this, nome, email, nascimento, tel, celular, matricula);
  this.area = area;
  this.lattes = lattes;
}

function atualizarAluno() {
  let camposExtras = document.getElementById("formCamposExtras");
  camposExtras.innerHTML = "";

  let label = document.createElement("label");
  label.setAttribute("for", "curso");
  label.setAttribute("class", "form-label");
  label.textContent = "Curso";
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "curso");
  input.setAttribute("name", "curso");
  input.setAttribute("placeholder", "Digite seu curso");
  input.setAttribute("class", "form-control");
  camposExtras.appendChild(label);
  camposExtras.appendChild(input);
}

function atualizarProfessor() {
  let camposExtras = document.getElementById("formCamposExtras");
  camposExtras.innerHTML = "";

  let divArea = document.createElement("div");
  divArea.setAttribute("class", "mb-3");

  let labelArea = document.createElement("label");
  labelArea.setAttribute("for", "area");
  labelArea.setAttribute("class", "form-label");
  labelArea.textContent = "Área";

  let inputArea = document.createElement("input");
  inputArea.setAttribute("type", "text");
  inputArea.setAttribute("id", "area");
  inputArea.setAttribute("name", "area");
  inputArea.setAttribute("placeholder", "Digite sua área de atuação");
  inputArea.setAttribute("class", "form-control");

  divArea.appendChild(labelArea);
  divArea.appendChild(inputArea);

  let divLattes = document.createElement("div");
  divLattes.setAttribute("class", "mb-3");

  let labelLattes = document.createElement("label");
  labelLattes.setAttribute("for", "lattes");
  labelLattes.setAttribute("class", "form-label");
  labelLattes.textContent = "Lattes";

  let inputLattes = document.createElement("input");
  inputLattes.setAttribute("type", "text");
  inputLattes.setAttribute("id", "lattes");
  inputLattes.setAttribute("name", "lattes");
  inputLattes.setAttribute(
    "placeholder",
    "Digite aqui o endereço para seu Lattes"
  );
  inputLattes.setAttribute("class", "form-control");

  divLattes.appendChild(labelLattes);
  divLattes.appendChild(inputLattes);

  camposExtras.appendChild(divArea);
  camposExtras.appendChild(divLattes);
}

document.querySelectorAll("input[name='tipoPessoa']").forEach((input) => {
  input.addEventListener("change", function () {
    if (this.value == "aluno") {
      atualizarAluno();
    } else atualizarProfessor();
  });
});

document.getElementById("enviar").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let nascimento = document.getElementById("nascimento").value;
  let fixo = document.getElementById("fixo").value;
  let celular = document.getElementById("celular").value;
  let tipoPessoa = document.querySelector(
    "input[name='tipoPessoa']:checked"
  ).value;
  let matricula = parseInt(document.getElementById("matricula").value);
  let pessoa;

  if (
    nome &&
    email &&
    nascimento &&
    tel &&
    celular &&
    tipoPessoa &&
    matricula
  ) {
    if (tipoPessoa == "aluno") {
      let curso = document.getElementById("curso").value;
      if (!curso) {
        alert("Por favor, preencha o curso.");
        return;
      }
      pessoa = new Aluno(
        nome,
        email,
        nascimento,
        tel,
        celular,
        matricula,
        curso
      );
      document.getElementById("resultado").textContent =
        pessoa.exibir() + "\nCurso: " + pessoa.curso;
    } else {
      let area = document.getElementById("area").value;
      let lattes = document.getElementById("lattes").value;
      if (!area || !lattes) {
        alert("Por favor, preencha a área e o Lattes.");
        return;
      }
      pessoa = new Professor(
        nome,
        email,
        nascimento,
        tel,
        celular,
        matricula,
        area,
        lattes
      );
      document.getElementById("resultado").textContent =
        pessoa.exibir() +
        "\nÁrea: " +
        pessoa.area +
        "\nLattes: " +
        pessoa.lattes;
    }
  } else {
    alert("Por favor, preencha todos os campos.");
    return;
  }
});

document.getElementById("redefinir").addEventListener("click", function () {
  document.getElementById("formCamposExtras").innerHTML = "";
  document.getElementById("resultado").textContent = "";
});
