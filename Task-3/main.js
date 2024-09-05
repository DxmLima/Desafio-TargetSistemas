// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const dados = require("./dados.json");

dados.forEach(item => {
  console.log(item.valor);
});

const valoresValidos = dados.map(item => item.valor).filter(valor => valor > 0);
const menorValor = Math.min(...valoresValidos);
const maiorValor = Math.max(...valoresValidos);
const somaTotal = dados.reduce((x, item) => x + item.valor, 0);
const mediamensal = somaTotal / 31
console.log(`O menor valor, é: ${menorValor}`);
console.log(`O maior valor, é: ${maiorValor}`);
console.log(`A soma de todos os valores é: ${somaTotal}`);
console.log(`A Média Mensal é de  ${mediamensal}`);
const diasAcimaMedia = dados.filter(item => item.valor > mediamensal);
const numeroDeDiasAcimaMedia = diasAcimaMedia.length;
console.log(`Número de dias com valor superior a ${mediamensal} é: ${numeroDeDiasAcimaMedia}`);
