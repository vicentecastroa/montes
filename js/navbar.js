(function ($) {
  $(document).ready(function(){

  	$(window).scroll(function(){
  		if ($(window).scrollTop() >= 100 ){
  			$('.bg-blue').animate({backgroundColor: "rgba(34, 33, 39, 1)" });
  	} else if ($(window).scrollTop() < 50 ){
  		};

  	});

  	$('.nav-link').click(function (){
  		var name = $(this).attr('name');  		
  		$('html, body').animate({
		    scrollTop: $(name).offset().top
		}, 1000);
		$('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
  	});

    /*

    $('.section').on('scrollSpy:enter', function() {
      var scope = $(this).attr('id')
      $(this).parent().find('nav-item').removeClass('active');
      $("a[name*=#"+scope+"]").addClass('active');

    });

    $('.section').on('scrollSpy:exit', function() {
      var scope = $(this).attr('id')
      $("a[name*=#"+scope+"]").removeClass('active');
    });

    $('.section').scrollSpy();*/

});
  }(jQuery));