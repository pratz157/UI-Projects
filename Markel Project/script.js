(function($) {
  


  

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
  	console.log("scroll trigger link is clicked");
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
  	if($("#mainNav").length){
  		if ($("#mainNav").offset().top > 100) {
	      $("#mainNav").addClass("navbar-shrink");
	    } else {
	      $("#mainNav").removeClass("navbar-shrink");
	    }
  	}
    
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

 

})(jQuery); // End of use strict
