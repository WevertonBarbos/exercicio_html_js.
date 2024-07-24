document.getElementById("myForm").addEventListener("submit", function(e) {
    event.preventDefault();
    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);
    let messageDiv = document.getElementById("message");

    if (campoB > campoA) {
    messageDiv.textContent = "Formulário válido!";
    messageDiv.classList.remove("invalido");
    messageDiv.classList.add("valido");
    } else {
    messageDiv.textContent = "Formulário inválido! O número em B deve ser maior que o número em A.";
    messageDiv.classList.remove("valido");
    messageDiv.classList.add("invalido");
    }
});
