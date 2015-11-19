function peopleWithAgeDrink (age, drink){
	if (age >= 21){

		drink = 'whisky';
	}else if (age <=20 && age >=18 ){

		drink = 'beer';

	}else if(age <=17 && age >=14 ){
		drink = 'coke';
	
	}else{
		
		 drink = 'toddy';
	
	}	

	return drink;
};	