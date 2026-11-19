const calculaTaxaDesconto = require('./calculaDesconto');

//Todos os Nós

/*
1-0, 1A, 2
2-0, 1A, 1B, 3A, 4, 7
3-0, 1A, 1B, 3A, 3B, 3C, 5A, 6, 7
4-0, 1A, 1B, 3A, 3B, 3C, 5A, 5B, 7
*/

test("Desconto de 15% - Todos os Nós", () => {
  expect(calculaTaxaDesconto(true, 'ouro', 550)).toBe(15);
});

test("Desconto de 10% - Todos os Nós", () => {
  expect(calculaTaxaDesconto(true, 'prata', 450)).toBe(10);
});

test("Desconto de 5% - Todos os Nós", () => {
  expect(calculaTaxaDesconto(false, 'bronze', 300)).toBe(5);
});

test("Desconto de 0% - Todos os Nós", () => {
  expect(calculaTaxaDesconto(false, 'cobre', 150)).toBe(0);
});

//Todos os caminhos básicos

/*
1- 0, 1A, 2, X
2- 0, 1A, 1B, 2, X
3- 0, 1A, 1B, 3A, 4, 7, X
4- 0, 1A, 1B, 3A, 3B, 4, 7 ,X
5- 0, 1A, 1B, 3A, 3B, 3C, 4, 7 ,X
6- 0, 1A, 1B, 3A, 3B, 3C, 5A, 6, 7 ,X
7- 0, 1A, 1B, 3A, 3B, 3C, 5A, 5B, 6, 7 ,X
8- 0, 1A, 1B, 3A, 3B, 3C, 5A, 5B, 7, X
*/

//Desconto de 15%

test("Desconto de 15% -> Compra >= 500 - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'ouro', 550)).toBe(15);
});

test("Desconto de 15% -> Cliente = 'ouro' - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'ouro', 450)).toBe(15);
});

//Desconto de 10%

test("Desconto de 10% -> Cliente = 'prata' - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'prata', 350)).toBe(10);
});

test("Desconto de 10% -> Primeira Compra = 'true' - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(true, 'bronze', 350)).toBe(10);
});

test("Desconto de 10% -> Compra >= 400 - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'bronze', 450)).toBe(10);
});

//Desconto de 5%

test("Desconto de 5% -> Compra >= 200 - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'madeira', 250)).toBe(5);
});

test("Desconto de 5% -> Cliente = 'bronze' - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'bronze', 150)).toBe(5);
});

//Desconto de 0%

test("Desconto de 0% - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'madeira', 150)).toBe(0);
});

//Matar Mutações

test("Desconto de 15% -> Cliente = 'bronze' - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'bronze', 500)).toBe(15);
});

test("Desconto de 10% -> Compra = 400 - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'bronze', 400)).toBe(10);
});

test("Desconto de 5% - Todos os Caminhos Básicos", () => {
  expect(calculaTaxaDesconto(false, 'madeira', 200)).toBe(5);
});
