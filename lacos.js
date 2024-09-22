import { faker } from '@faker-js/faker';

// 1
const arr1 = [];
for (let i = 0; i < 5; i++){
  arr1.push(faker.number.int(100, 1));
}

let elementos = "";
for (let i of arr1){
  elementos += i + " ,";
}

console.log(`Elementos: ${elementos.slice(0, elementos.length -2)}`);


// 2
const imprimeArr = (arr) => {
  let numeroEIndice = "";
  for(let i = 0; i < arr.length; i++){
    numeroEIndice += `I: ${i} , N: ${arr[i]} | `;
  }

  console.log(numeroEIndice.slice(0, numeroEIndice.length -2));
}

imprimeArr(arr1);


// 3
const somaElementos = (arr) => {
  let soma = 0;
  for(let i of arr){
    soma += i;
  }

  return soma;
}

console.log(somaElementos(arr1));


// 4
const menorMaior = (arr) => {
  arr.sort();
  return `O menor número é ${arr[0]} e o maior número é ${arr[arr.length - 1]}`;
}

console.log(`Array: ${arr1}`);
console.log(menorMaior(arr1));


// 5
const numerosPares = [];
for(let i of arr1){
  if (i % 2 === 0){
    numerosPares.push(i);
  }
}

console.log(`Números pares: ${numerosPares}`);
