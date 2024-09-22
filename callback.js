import { faker } from '@faker-js/faker';

// 1
const arr1 = [];
let index = 0;
for (let i = 0; i < 5; i++){
  arr1.push(faker.number.int(100, 1));
}

arr1.forEach((element) => console.log(`I: ${index++}, E: ${element}`));


// 2
const soma10 = (e) => e + 10;

function executaOperacaoEmArray(arr, fun){
  return arr.map(fun);
}

console.log(executaOperacaoEmArray(arr1, soma10));


// 3
const valor = 10; //faker.number.int(100, 1);
console.log(`Valor procurado: ${valor}`);
console.log(`Posição: ` + 
            `${arr1.findIndex((element, index, array) => element === valor)}`);


// 4
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const nomes = nomesTurmaA.concat(nomesTurmaB);
const nomeProcurado = "Mario Santos";

const resultado = nomes.find((element) => element === nomeProcurado) ? nomeProcurado : "Aluno Não Encontrado";

console.log(resultado);


// 5
const numeros = [6, 9, 12, 15, 18, 21];

const valores = numeros.forEach((e) => console.log(e * 3));
console.log(`Posição do 18: ${numeros.findIndex((element) => element === 18)}`);

