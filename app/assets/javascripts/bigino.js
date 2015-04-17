// DropDown on hover

$(document).ready(function(){
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
    });
})

/*
Una lezione estrema di come funziona javascript:

$(document).ready(setUp);

function steUp(){
			$('.navbar .dropdown').hover(function() {
		  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
		  }, function() {
		      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
		  });

}

function invitaRagazza(ora,data,doveMiPassiaPrendere){

}
	
	function chiamaRistorante(parms,callback){
			//chiamata
			{
				persone:2,
				ora:"19:30",
				giorno:54/34/9978,
				onSuccess:function(response){
					if(response.esito == true){
						//response.esito,
						//response.ora,
						//repsonse.data,
						//response.idPrenotazione,
							invitaRagazza(response.ora,response.data,solitoPosto)
					}else{
							vaiAlSupermercato();
					}
					
				},
				onError:function(error){

				}

			}
	}

	function ciao(){

		telefona per prenotare il ristorante (asycronous)
																
															if(risposta == true){
																invita la tua ragazza
																vai a cena
															}else{
																telefona ristorente 2
																	if(risposta == true){
																		invita la tua ragazza
																		vai a cena
																	}
															}
																
		compra dei fiori
		prenota albergo


	}

	mittente richiesta ricevitore
	ricevitore risposta mittente

	*/