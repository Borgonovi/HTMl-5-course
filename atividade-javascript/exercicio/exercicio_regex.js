//Regex validar CPF

var cpf1 = '401.425.758-44';
var cpf2 = '401s425.758-44';

var regCPF = /^\d{2,3}\.\d{3}\.\d{3}\-\d{2}$/g;

console.log('Validação CPF\n');
console.log(regCPF.test(cpf1)+'\n');
console.log(regCPF.test(cpf2)+'\n');
console.log('--------------------\n');

//Regex validar Telefone

var tel1 = '(11)3699-2577';
var tel2 = '3699-2877';
var cel1 = '(11)96562-4532';
var cel2 = '96562-4532'

var regCel = /^\(\d{2}\)\d{5}\-\d{4}$/;
var regTel = /^\(\d{2}\)\d{4}\-\d{4}$/;

console.log('Validação Telefones\n');
console.log(regTel.test(tel1)+'\n');
console.log(regTel.test(tel2)+'\n');
console.log(regCel.test(cel1)+'\n');
console.log(regCel.test(cel2)+'\n');
console.log('--------------------\n');