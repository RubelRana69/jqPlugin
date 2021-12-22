$(document).ready( function(){
	//counterup//
	$('.btn_count').counterUp({
		delay: 500,
		time: 5000
	});

	//wow//
	wow = new WOW(
	{
                      boxClass:     'wow',      
                      animateClass: 'animated', 
                      offset:       0,          
                      mobile:       true,       
                      live:         true        
                  }
                  )
	wow.init();

	//aos//
	AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});

});