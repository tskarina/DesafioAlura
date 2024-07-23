function criptografar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

document.getElementById("btnCriptografar").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const encryptedText = criptografar(inputText);
  document.getElementById("outputText").innerText =
    encryptedText || "Nenhuma mensagem encontrada\nDigite um texto que você deseja criptografar ou descriptografar";
});

document.getElementById("btnDescriptografar").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const decryptedText = descriptografar(inputText);
  document.getElementById("outputText").innerText =
    decryptedText || "Nenhuma mensagem encontrada\nDigite um texto que você deseja criptografar ou descriptografar";
});

document.getElementById("btnCopiar").addEventListener("click", function () {
  const outputText = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(outputText);
});
