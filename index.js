$(window).scroll(function(){
    
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 700);
	$('.change-color').toggleClass('color', $(this).scrollTop() > 700);
	
});