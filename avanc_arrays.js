import { faker } from '@faker-js/faker';

// 1
const a = [0,0,0,0,0].map(i => i = faker.number.int(100, 1)).sort();
const b = [0,0,0,0,0].map(i => i = faker.number.int(100, 1)).sort();
const c = [0,0,0,0,0].map(i => i = faker.number.int(100, 1)).sort();
console.log(`concat a, b, c: ${((...a) => [].concat(...a))(a,b,c)}`);


// 2
console.log(`soma a: ${a.reduce((a, i) => a + i, 0)}`);


// 3
const c1 = ["","","","",""].map(i => i = faker.color.human());
const c2 = ["","","","",""].map(i => i = faker.color.human());
console.log(`cores: ${[...new Set(c1.concat(c2).sort())]}`);


// 4
console.log(`pares b: ${b.filter(i => i % 2 === 0).sort()}`);


// 5
console.log(`c % 3 > 5: ${c.filter(i => i % 3 === 0 && i > 5).sort()}`);


// 6
console.log(`soma numeros c: ${c.reduce((a, i) => a + i, 0)}`);