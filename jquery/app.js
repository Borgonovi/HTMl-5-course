var $button = $('button');
var $CEP = $('input[name="cep"]');
var $addressInputs = $('.address-filled.hidden');
 


$button.on('click', function(){
	var CEP = $CEP.val();
	var regCEP = /^[0-9]{5}-[0-9]{3}$/;
	
	 if(regCEP.test(CEP)){
	 	$.ajax({
	 		url:'http://cep.correiocontrol.com.br/'+CEP.replace('-', '')+'.json',
	 		success: function(endereco){
	 			$addressInputs.fadeIn();
	 			$('input[name="endereco"]').val(endereco.logradouro);
	 			$('input[name="bairro"]').val(endereco.bairro);
	 			$('input[name="cidade"]').val(endereco.localidade);
	 			$('input[name="estado"]').val(endereco.uf);

	 			console.log('endereco');
;	 		},

	 		error: function(res){
	 			alert('Endereço não encontrado!');
	 		} 
	 	})
	 }


	return false;

})
