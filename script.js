const perfil = [
  {
    nome: "João",
    idade: 28,
    endereco: "Rua da Amizade, 123",
    amigos: ["Ana", "Pedro", "Mariana"],
    interesses: ["Futebol", "Música", "Leitura"]
  },
  {
    nome: "Maria",
    idade: 32,
    endereco: "Av. Principal, 456",
    amigos: ["João", "Pedro", "Lucas"],
    interesses: ["Artesanato", "Viagens", "Culinária"]
  },
  {
    nome: "Pedro",
    idade: 25,
    endereco: "Rua das Flores, 789",
    amigos: ["Ana", "Mariana", "Lucas"],
    interesses: ["Fotografia", "Música", "Esportes"]
  },
  {
    nome: "Ana",
    idade: 26,
    endereco: "Rua da direita, 456",
    amigos: ["Maria", "João", "Pedro"],
    interesses: ["Leitura"]
  }
];

function exibirPerfil() {
  const nomePerfil = document.getElementById("inputPerfil").value;
  const perfilEncontrado = perfil.find(p => p.nome.toLowerCase() === nomePerfil.toLowerCase());
  
  if (perfilEncontrado) {
    document.getElementById("divPerfil").innerHTML = `
      <p><strong>Nome:</strong> ${perfilEncontrado.nome}</p>
      <p><strong>Idade:</strong> ${perfilEncontrado.idade}</p>
      <p><strong>Endereço:</strong> ${perfilEncontrado.endereco}</p>
      <p><strong>Amigos:</strong> ${perfilEncontrado.amigos.join(", ")}</p>
      <p><strong>Interesses:</strong> ${perfilEncontrado.interesses.join(", ")}</p>
    `;
  } else {
    document.getElementById("divPerfil").innerHTML = "Perfil não encontrado";
  }
}

const btnExibirPerfil = document.getElementById("btnExibirPerfil");
btnExibirPerfil.addEventListener("click", exibirPerfil);




fetch("./qlqr.json").then((resposta)=>{
  return resposta.json()
}).then((dados)=>{
  console.log(dados)
});
 