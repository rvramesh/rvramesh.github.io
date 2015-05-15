(function ( $ ){
	/* Animate nav */
	var $current = $('.navigation ul li.active');
	
	$(".navigation ul li").on('click touchend', function(e){
		$(this).addClass('active').siblings().removeClass('active');
		 $current = $('.navigation ul li.active');
		return true;
	})
	
	/* Animate Scroll */
	var barHeight = 87;
	
	$('.navigation a[href*=#], a[href*=#top]').on('click touchend',function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
	
		$('html,body').animate({
			scrollTop: $('a[name='+target.replace(/#/g, "")+']').offset().top - barHeight
		}, 'fast' ,'linear');
	});
	
	/* Animate nav on Window Scroll */
	var arrayOffset = [];	
		
	$('a[name="aboutme"]').each(function(i){
		arrayOffset[i] = $(this).offset().top - barHeight;
	})
	
	$(window).load(function(){
		$('.hero').slideDown('slow', function(){
			$('.division').each(function(i){			
				arrayOffset[i] = $(this).offset().top;
			})
		});
	})
	
	$(window).scroll(function(){
		for (var index = 0; index < arrayOffset.length; index++) {
			if (($(this).scrollTop() >= arrayOffset[index] - barHeight) && ($(this).scrollTop() < arrayOffset[index + 1] - barHeight)
			&& index < arrayOffset.length - 1) {
				$('.navigation ul li').eq(index).click();			
				if ($(this).scrollTop() == ($(document).height() - $(this).height())){ 
					$(".navigation ul li").eq(arrayOffset.length - 1).click();								
				} 
				break;
			} else if(($(this).scrollTop() >= arrayOffset[index] - barHeight) && index === arrayOffset.length-1){
				$('.navigation ul li').eq(index).click();			
				if ($(this).scrollTop() == ($(document).height() - $(this).height())){ 
					$(".navigation ul li").eq(arrayOffset.length-1).click();								
				} 
			}		
		}
	})
	
	/* Animate Name on nav var */
	var $me =  $('.me-name'),
	    brandW = - $me.width() - 60,
		paddingLeft = 10;
	
	$me.css('left', brandW);
	
	//$me.click(function(e){
		//return false;
	//})
	
	$(window).scroll(function(){
		
		$me.stop();
		if ($(this).scrollTop() > 10 ){
			$me.animate({
				left : paddingLeft,
				opacity : 1
			}, 'fast');
		} else {
			$me.animate({
				left : paddingLeft + brandW,
				opacity : 0
			},'fast');
		}
		
	})
	
	/* Remove click event from responsive nav */
	$('.btn-navbar').on('click', function(e){
		$('.navigation').toggle();
	});
	
	/* Animate Top button */	
	$(window).scroll(function(){
		if ($(window).width() > 768 ){
			if($(this).scrollTop() > 300 ){
				 $('.go-to-top').fadeIn();
			} else {
				$('.go-to-top').fadeOut();
			}
		}
	})	
})( jQuery );