let deposito_inicial = 500;
let deposito_segundo = 200;
let saque = 50;
let valor_final = 0

//Primeiro mes
valor_final = deposito_inicial + deposito_inicial*0.01;
console.log("saldo do primeiro mês: ", valor_final);

//Segundo mes
valor_final = valor_final + deposito_segundo;
valor_final = valor_final + valor_final*0.01;
console.log("saldo do segundo mês: ", valor_final);

//terceiro mes
valor_final = valor_final - saque;
valor_final = valor_final + valor_final * 0.01;
console.log("saldo final: ", valor_final);