var maskify = function(str){
	var last4reg = /.{0,4}$/;
	var last4 = str.match(last4reg)[0];
	return str.replace(/./g, '#').replace(last4reg, last4);
};

process.stdout.write('\033c');
console.log(maskify('401425758445556'));