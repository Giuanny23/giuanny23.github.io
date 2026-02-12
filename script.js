
function validarform(event) {
    event.preventDefault();
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const totalPessoas = document.getElementById("totalPessoas");
    const lab = document.getElementById("lab");


    if (nome.value == "" || email.value == "" || totalPessoas.value == "" || lab.value == "") {
        alert("Nome, email, total de pessoas e o lab são campos obrigatórios!");
        return false;
    }


    alert("Enviando solicitação");
    event.target.reset();
    return true;
}


