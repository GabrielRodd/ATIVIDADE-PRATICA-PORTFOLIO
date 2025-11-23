
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const emailValido = /\S+@\S+\.\S+/;
  if (!emailValido.test(email)) {
    alert("E-mail inválido!");
    return;
  }

  else{
    alert("Mensagem enviada com sucesso!");
    document.getElementById("formContato").reset();
  }

});
