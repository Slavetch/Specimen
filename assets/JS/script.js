$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});

 
  $(".owl-carousel").owlCarousel({
  	responsiveClass:true,
  	margin:15,
  	items:4,
   	loop:true,
   	responsive:{
   		 0:{
            items:1,
            nav:true,
            loop: true
        },
        600:{
            items:3,
            nav:true,
            loop: true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
   	}
  });
 





