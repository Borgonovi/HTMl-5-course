var arr = [
    {name: 'Coxinha', amount: 2, value: 2.5},
    {name: 'Esfirra', amount: 3, value: 3.5},
    {name: 'Coca', amount: 1, value: 7}
];

process.stdout.write('\033c');

console.log('#####################################');
console.log('#\tComanda:                    #');
console.log('#####################################');
console.log('# Qtd\tProduto\t\tPreço Unit. #');

var total = 0;

for (var i = 0; i < arr.length; i++){
	console.log('# '+arr[i].amount + '\t' + arr[i].name + '\t\t R$ ' + arr[i].value.toFixed(2).replace('.', ',')+'    #');


	total = total + (arr[i].value * arr[i].amount);
}

	console.log('#####################################\n# Total\t\t\t R$ ' + total.toFixed(2).replace('.', ',')+'   #');
	console.log('#####################################');