import { faker } from '@faker-js/faker';

// 1
const concatArrays = (a, b) => {
  return a.concat(b);
}

const a = [1,2,3];
const b = [3,4,5];
console.log(concatArrays(a,b));


// 2
const numeros = [1,2,3,4,5,6,7,8,9,0];
const parteNumeros = numeros.splice(2, 5);
console.log(`numeros: ${numeros}, parteNumeros: ${parteNumeros}`);


// 3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(`Frutas antes: ${frutas}`);
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(`Frutas depois: ${frutas}`);


// 4
const menuPrincipal = [];
const menuSobremesas = [];

for (let i = 0; i < 4; i++){
  menuPrincipal.push(faker.food.dish());
}

for (let i = 0; i < 4; i++){
  menuSobremesas.push(faker.food.fruit());
}

console.log(`Menu principal: ${menuPrincipal}`);
console.log(`Menu sobremesas: ${menuSobremesas}`);
const menuTotal = menuPrincipal.concat(menuSobremesas);

console.log(`Menu total: ${menuTotal}`);


// 5
const lista_3_x_3 = [];

for(let i = 0; i < 3; i++){
    const novaLinha = [];
    for(let j = 0; j < 3; j++){
      novaLinha.push(faker.number.int(100, 1));
    }
    lista_3_x_3.push(novaLinha);
}

console.log(lista_3_x_3);


// 6
console.log(`lista_3_x_3[1][2]: ${lista_3_x_3[1][2]}`);


// 7
const terceiraLinha = lista_3_x_3.splice(2, 1)[0];
terceiraLinha.splice(1, 0, 15);
lista_3_x_3.splice(2, 0, terceiraLinha);
console.log(lista_3_x_3);