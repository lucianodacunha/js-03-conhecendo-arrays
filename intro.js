import { faker } from '@faker-js/faker';

const aleatorioEntre = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// 1
const esparso = [,,,,,,,,];
const posicoes = [1,3,7];

console.log(`esparso antes: ${esparso}, Comprimento: ${esparso.length}`);

for (let i = 0; i < esparso.length; i++) {
  if (posicoes.includes(i)){
    esparso[i] = aleatorioEntre(1, 100);
  }
}

console.log(`esparso depois: ${esparso}, Comprimento: ${esparso.length}`);


// 2
const arr = [1,2,3,4,5];
console.log(`arr antes: ${arr}`);

arr.unshift(aleatorioEntre(1, 100));
console.log(`arr depois: ${arr}`);


// 3
const meuArray = [];
console.log(`meuArray antes: ${meuArray}`);

meuArray.push(aleatorioEntre(1, 100));
meuArray.push(aleatorioEntre(1, 100));
meuArray.push(aleatorioEntre(1, 100));
console.log(`meuArray durante: ${meuArray}`);

let primeiroElemento = meuArray.shift() * 2;
meuArray.unshift(primeiroElemento);
console.log(`meuArray depois: ${meuArray}`);


// 4
const novoArr = [];
novoArr.push(aleatorioEntre(1, 100));
novoArr.push(aleatorioEntre(1, 100));
novoArr.push(aleatorioEntre(1, 100));
console.log(`novoArr: ${novoArr}`);


// 5
const clinica = [];
console.log("Abrindo a clinica...");
console.log(`Fila na clinica: ${clinica}`);

for (let i = 0; i < 3; i++){
  const animal = faker.word.adjective();
  console.log(`${animal} chegou na clinica.`);
  clinica.push(animal);
}

console.log(`Fila na clinica: ${clinica}`);
console.log("Iniciando os atendimentos...");

for (let i = 0; i < 3; i++){ 
  const animal = clinica.shift();
  console.log(`${animal} saiu na clinica.`);  
}

console.log(`Fila na clinica: ${clinica}`);
console.log("...fechando a clinica.");