(function($) {
	$(document).ready(function(){

		var aux = true;

		$(window).scroll(function(){
			if ($(window).scrollTop() >= 100 && aux == true) {
				$('.complete').hide();
				aux = false;
			}
		});

		$('.more-btn').click(function(){
			$(this).parent().find('.l3p').toggle();
			$(this).parent().find('.complete').slideToggle(200);

			if ($(this).text() == 'Ver más') {
				$(this).text('Ver menos');
			} else {
				$(this).text('Ver más');
			}
		});

	});


}(jQuery));