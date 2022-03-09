console.clear();
var prompt = require("prompt-sync")();

// Objeto para armazenar os status do personagem
var atributos = {
  estudo: 0,
  cansaco: 0,
  fome: 0,
  limpeza: 100,
  entretenimento: 0,
};

// Variável para controlar o tempo
var hora = 6;

// Função que exibi os atributos
function exibirAtributo() {
  console.log();
  console.log("-=-=-=-= ATRIBUTOS =-=-=-=-");
  console.log(`Estudo: ${atributos.estudo}`);
  console.log(`Cansaco: ${atributos.cansaco}`);
  console.log(`Fome: ${atributos.fome}`);
  console.log(`Limpeza: ${atributos.limpeza}`);
  console.log(`Entretenimento: ${atributos.entretenimento}`);
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-");
}

function pergunta() {
  // Perguntas que alterarão esses status do personagem
  var perguntar = [
    "Levantar",
    "Fazer café da manhã",
    "Tomar café da manhã",
    "Estudar",
    "Higiene pessoal",
    "Jogar",
  ];

  // Estrutura de repetição for para listar as perguntas
  for (let i = 0; i < perguntar.length; i++) {
    console.log(i, perguntar[i]);
  }
}

function estruturaDecisao() {
  // Estrutura de decisao para modificar os atributos
  if (decisao === 0) {
    atributos.cansaco += 10;
    atributos.limpeza -= 10;
  } else if (decisao === 1) {
    atributos.fome += 10;
    atributos.cansaco += 5;
    atributos.limpeza += 5;
  } else if (decisao === 2) {
    atributos.fome -= 10;
  } else if (decisao === 3) {
    atributos.estudo += 20;
    atributos.fome += 10;
    atributos.cansaco += 5;
  } else if (decisao === 4) {
    atributos.limpeza -= 10;
    atributos.cansaco -= 5;
  } else if (decisao === 5) {
    atributos.entretenimento += 10;
    atributos.fome += 5;
  }
}

while (hora <= 12) {
  console.log();
  //Variavel de controle do tempo
  if (hora === 6) {
    console.log(`São ${hora} horas da manhã`);
    console.log("Aqui inicia-se a rotina matinal!");
    atributos = {
      estudo: 0,
      cansaco: 0,
      fome: 0,
      limpeza: 100,
      entretenimento: 0,
    };

    exibirAtributo();
  } else if (hora > 6) {
    console.log(`São ${hora} horas da manhã`);
  }

  console.log();
  // Chamando função de apresentação de escolhas
  pergunta();

  console.log();
  // Variavel de decisão para para alterar os status do personagem
  var decisao = +prompt("Digite uma opção listada acima: ");
  while (
    decisao !== 0 &&
    decisao !== 1 &&
    decisao !== 2 &&
    decisao !== 3 &&
    decisao !== 4 &&
    decisao !== 5
  ) {
    console.log();
    console.log("Digite uma opção válida");
    decisao = +prompt("Digite uma opção listada acima: ");
  }

  // Chmando estrutura de decisao
  estruturaDecisao();

  //Chamando a função para exibir os atributos
  exibirAtributo();

  // Incremento para avançar o tempo
  hora++;

  // Para reiniciar o jogo
  if (hora === 12) {
    console.log();
    console.log("Gostaria de repetir a rotina?");
    var restart = prompt("Digite [S/N]: ");
    var res = restart.toUpperCase();
    while (res !== "N" && res !== "S") {
      console.log();
      console.log("Digite uma opção válida");
      restart = prompt("Digite [S/N]: ");
      res = restart.toUpperCase();
    }
    if (res === "S") {
      hora = 6;
    } else {
      console.log();
      exibirAtributo();
      console.log();
      console.log("Encerrando o programa...");
      console.log("Obrigado por jogar!");
      break;
    }
  }
}
