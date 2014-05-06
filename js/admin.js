$(function () {


		var index = $('#index');
        var pueblo = $('#pueblo');
		var como = $('#como');
		var contacto = $('#contacto');

		index.css("display", 'block');
		pueblo.css("display", 'none');
		como.css("display", 'none');
		contacto.css("display", 'none');

		var menupueblo = $('#menu2');
		var menucomo = $('#menu3');
		var menucontacto = $('#menu4');
		
		menupueblo.click(function(){
			index.css("display", 'none');
			contacto.css("display", 'none');
			como.css("display", 'none');
			pueblo.fadeIn();		
		});
		
		menucomo.click(function(){
			index.css("display", 'none');
			pueblo.css("display", 'none');
			contacto.css("display", 'none');
			como.fadeIn();			
		});
		
		menucontacto.click(function(){
			index.css("display", 'none');
			pueblo.css("display", 'none');
			como.css("display", 'none');
			contacto.fadeIn();			
		});
		
		
		
		/* PUEBLO */
		var button1 = $('#butres');
        var button2 = $('#buthis');
        var button3 = $('#butfot');
		
		var button4 = $('#butres2');
        var button5 = $('#buthis2');
        var button6 = $('#butfot2');
		
		var button7 = $('#butres3');
        var button8 = $('#buthis3');
        var button9 = $('#butfot3');
		
		
		var resenia = $('#resenia');
        var historia = $('#historia');
        var fotos = $('#fotos');
		var resumen = $('#resumen');

		resenia.css("display", 'none');
		historia.css("display", 'none');
		fotos.css("display", 'none');
			
		
		button1.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            fotos.css("display", 'none');
			resenia.fadeIn();
        });
		
		button2.click(function(){
			resumen.css("display", 'none');
			resenia.css("display", 'none');
            fotos.css("display", 'none');
			historia.fadeIn();
        });
		
		button3.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            resenia.css("display", 'none');
			fotos.fadeIn();
        });
		
		button4.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            fotos.css("display", 'none');
			resenia.fadeIn();
        });
		
		button5.click(function(){
			resumen.css("display", 'none');
            resenia.css("display", 'none');
            fotos.css("display", 'none');
			historia.fadeIn();
        });
		
		button6.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            resenia.css("display", 'none');
			fotos.fadeIn();
        });
		
		button7.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            fotos.css("display", 'none');
			resenia.fadeIn();
        });
		
		button8.click(function(){
			resumen.css("display", 'none');
            resenia.css("display", 'none');
            fotos.css("display", 'none');
			historia.fadeIn();
        });
		
		button9.click(function(){
			resumen.css("display", 'none');
            historia.css("display", 'none');
            resenia.css("display", 'none');
			fotos.fadeIn();
        });
		
		/* COMO LLEGAR */
		
		var button1 = $('#butloc');
        var button2 = $('#butcall');
		
		var button3 = $('#butloc2');
        var button4 = $('#butcall2');

		var button5 = $('#butloc3');
        var button6 = $('#butcall3');
		
		var localiz = $('#localiz');
        var callej = $('#callej');
		var resucomo = $('#resucomo');

		localiz.css("display", 'none');
		callej.css("display", 'none');
			
		
		button1.click(function(){
			resucomo.css("display", 'none');
            callej.css("display", 'none');
			localiz.fadeIn();
        });
		
		button2.click(function(){
			resucomo.css("display", 'none');
            localiz.css("display", 'none');
			callej.fadeIn();
        });
		
		button3.click(function(){
			resucomo.css("display", 'none');
            callej.css("display", 'none');
			localiz.fadeIn();
        });
		
		button4.click(function(){
			resucomo.css("display", 'none');
            localiz.css("display", 'none');
			callej.fadeIn();
        });
		
		button5.click(function(){
			resucomo.css("display", 'none');
            callej.css("display", 'none');
			localiz.fadeIn();
        });
		
		button6.click(function(){
			resucomo.css("display", 'none');
            localiz.css("display", 'none');
			callej.fadeIn();
        });
		
		
});