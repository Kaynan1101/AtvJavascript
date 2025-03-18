const radioProfessor = document.getElementById("professor");
const radioAluno = document.getElementById("aluno");
const container = document.getElementById("container");

radioProfessor.addEventListener("click", () => {
  container.classList.remove = `
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome">
        <label for="disciplina">Disciplina:</label>
        <input type="text" id="disciplina" name="disciplina">
    `;
});
