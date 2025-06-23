const botao = document.getElementById("botao");
const mensagemDiv = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagemDiv.textContent = "Você é mais forte do que imagina e mais capaz do que acredita. Cada passo, por menor que pareça, é uma vitória rumo ao seu crescimento. Não desista agora o que você sonha está mais perto do que parece.";
    mensagemDiv.style.display = "block";
  });