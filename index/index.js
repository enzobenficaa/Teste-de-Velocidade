// Criamos uma variavel para salvar o nome do veiculo 1
let veiculo1 = prompt("Digite o nome do veículo 01");
// Criamos uma variavel para salvar o nome do veiculo 2
let veiculo2 = prompt("Digite o nome do veículo 02");
// Criamos uma variavel para salvar a velocidade do veiculo 1
let velocidade1 = parseFloat(prompt("Digite a velocidade do veiculo 01"));
// Criamos uma variavel para salvar a velocidade do veiculo 2
let velocidade2 = parseFloat(prompt("Digite a velocidade do veiculo 02"));
// Se a velocidade 1 for maior que 2
if (velocidade1 > velocidade2) {
  // Exibimos a mensagem que a velocidade do veiculo 1 é maior
  alert("A velocidade do " + veiculo1 + " é maior");
  // Se a velocidade 2 for maior que a velocidade 1
} else if (velocidade2 > velocidade1) {
  // Exibimos a mensagem que a velocidade do veiculo 2 é maior
  alert("A velocidade do " + veiculo2 + " é maior");
  // Se nao
} else {
  // As velocidades são iguais
  alert("A velocidade do " + veiculo1 + " e " + veiculo2 + " são iguais");
}
