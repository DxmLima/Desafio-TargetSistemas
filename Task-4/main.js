// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// // Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  


const sp = "R$67.836,43";
const rj = "R$36.678,66";
const mg = "R$29.229,88";
const es =  "R$27.165,48";
const uk = "R$19.849,53";

// Função para converter o formato "R$XX.XXX,XX" para número
function parseValue(value) {
    return parseFloat(value.replace("R$", "").replace(/\./g, "").replace(",", "."));
  }
  
  // Convertendo os valores para números
  const spValue = parseValue(sp);
  const rjValue = parseValue(rj);
  const mgValue = parseValue(mg);
  const esValue = parseValue(es);
  const ukValue = parseValue(uk);
  
  // Calculando o total
  const total = spValue + rjValue + mgValue + esValue + ukValue;
  
  // Função para calcular o percentual
  function calcularPercentual(valor, total) {
    return (valor / total) * 100;
  }
  
  // Calculando os percentuais
  const spPercentual = calcularPercentual(spValue, total);
  const rjPercentual = calcularPercentual(rjValue, total);
  const mgPercentual = calcularPercentual(mgValue, total);
  const esPercentual = calcularPercentual(esValue, total);
  const ukPercentual = calcularPercentual(ukValue, total);
  
  // Exibindo os resultados
  console.log(`SP: ${spPercentual.toFixed(2)}%`);
  console.log(`RJ: ${rjPercentual.toFixed(2)}%`);
  console.log(`MG: ${mgPercentual.toFixed(2)}%`);
  console.log(`ES: ${esPercentual.toFixed(2)}%`);
  console.log(`UK: ${ukPercentual.toFixed(2)}%`);