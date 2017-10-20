$("document").ready(function(){
  $(".texto-area").on('click', function(){
  	$(this).animate({
		    height: $(this).get(0).scrollHeight
		}, 1000, function(){
		    $(this).height('auto');
		});
  	$(this).toggleClass('open')
  });

});