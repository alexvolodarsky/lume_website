jQuery(document).ready(function(jQuery) {
	if(jQuery('.testimonials-list-item')){
		jQuery('.testimonials-list-item').animate({opacity:0});
		jQuery('.testimonials-list .testimonials-list-item').first().animate({opacity:1}).addClass('active');
		testimonials = setInterval("Testimonial()",3000);
		jQuery('.testimonials-list-left, .testimonials-list-right').mouseenter(function(){
			clearInterval(testimonials);
		}).mouseleave(function(){
			testimonials = setInterval("Testimonial()",3000);
		});
		jQuery('.testimonials-list-left').click(function(){
			Testimonial(1);
		});
		jQuery('.testimonials-list-right').click(function(){
			Testimonial();
		})
		
	}
	jQuery.fx.interval = 50;
	jQuery('#top-link').goLink({
		min: 400,
		fadeSpeed: 600
	});
	//smoothscroll
	jQuery('#top-link, .top').click(function(e) {
		e.preventDefault();
		jQuery.scrollTo(0,800);
	});
	
	jQuery('a.more').click(function(e){
		e.preventDefault();
		
		if(jQuery(this).hasClass('active')){
			jQuery(this).removeClass('active').html(jQuery(this).attr('title'));
			jQuery('#vendors').removeClass('active');
		}else{
			jQuery(this).addClass('active').html(jQuery(this).attr('href'));
			jQuery('#vendors').addClass('active');
		}
	
	});
	Nav = jQuery('#drop-down-nav').children('ul'),
	options = '<option value="" selected>Navigate...</option>';

	Nav.find('li').each(function() {
		
			link = jQuery(this).children('a'),
			depth   = jQuery(this).parents('ul').length - 1,
			indent  = '';



		if( depth ) {
			while( depth > 0 ) {
				indent += ' - ';
				depth--;
			}
		}
		options += '<option value="' + link.attr('href') + '">' + indent + ' ' + link.text() + '</option>';
	}).end().after('<select class="mobile-navigation">' + options + '</select>');

	jQuery('.mobile-navigation').on('change', function() {
		window.location = jQuery(this).val();
	});
	



	if (jQuery.browser.msie)
	{
		jQuery('#applications li,#secondary-thumbs li').mouseenter(function()
		{
			var $item = jQuery(this).children('.secondary-gal');
			var $secondary = $item.children('.secondary-info');
			$item.fadeIn(500);
			$secondary.children('.view').animate({left:0},500)
			$secondary.children('.link-this').animate({left:0},500)
		});

		jQuery('#applications li,#secondary-thumbs li').mouseleave(function(){
			jQuery(this).children('.secondary-gal').fadeOut(500);
			jQuery(this).children('.secondary-gal').children('.secondary-info').children('.view').animate({left:500},500)
			jQuery(this).children('.secondary-gal').children('.secondary-info').children('.link-this').animate({left:-500},500)
		});
	}











/*	jQuery(function($){
		if ($('div').is('#secondary')){
			jQuery('#secondary').camera({
				autoAdvance: false,
				mobileAutoAdvance: false,
				thumbnails: false,
				height: 'auto',
				navigation: false,
				navigationHover: false,
				playPause: false,
				loader: 'none',
				fx: 'simpleFade, curtainSliceLeft, curtainSliceRight, scrollBottom, scrollTop',
				Cols: 4,
				Rows: 1,
				slicedCols: 4,
				slicedRows: 1,
				transPeriod: 500
			});
		}
	});
/*	jQuery(function($){
		if ($('div').is('#vendors')){
			jQuery('#vendors').camera({
				autoAdvance: false,
				mobileAutoAdvance: false,
				thumbnails: false,
				height: 'auto',
				navigation: false,
				navigationHover: false,
				playPause: false,
				loader: 'none',
				fx: 'scrollHorz',
				Cols: 4,
				Rows: 1,
				slicedCols: 4,
				slicedRows: 1,
				transPeriod: 500
			});
		}
	});  */
/*	jQuery(function($){
		if ($('div').is('#secondary-g')){
			jQuery('#secondary-g').camera({
				autoAdvance: false,
				mobileAutoAdvance: false,
				thumbnails: false,
				height: 'auto',
				navigation: false,
				navigationHover: false,
				playPause: false,
				loader: 'none',
				fx: 'simpleFade, curtainSliceLeft, curtainSliceRight, scrollBottom, scrollTop',
				Cols: 4,
				Rows: 1,
				slicedCols: 4,
				slicedRows: 1,
				transPeriod: 500
			});
		}
	});		
	*/
	//$(".accordion ul li .sub-menu").slideToggle();
	jQuery(".accordion ul li .sub-menu").each(function(){
		//console.log();
		jQuery(this).css('height',jQuery(this).height());
		jQuery(this).css('display','none');
		
	})
	jQuery(".accordion ul li a").click(function (e) {
		e.preventDefault();
		
	//	h = jQuery(this).parent().find('.sub-menu').height()
		//console.log(h);
		jQuery(this).parent().find('.sub-menu').slideToggle('slow');
		//$(this).parent().find('.sub-menu').css('height',0);
		//$(this).parent().find('.sub-menu').css('overflow','hidden');
		//$(this).parent().find('.sub-menu').css('display','block');
		//$(this).parent().find('.sub-menu').animate({'height':h},500);
		
		//;
		jQuery(this).parent().toggleClass("active");
		
	});
	
	
	/*jQuery(function($){
		$('.socials a').hover(
		
		function(){
			$(this).animate({backgroundPosition: '0 0'});
		},
		
		function(){
			$(this).animate({backgroundPosition: '0 -16'});
		}
		);
	});*/
	
		
		jQuery(function(jQuery){
			if (jQuery('div').is('#third')){
				jQuery('#third').camera({
					autoAdvance: false,
					mobileAutoAdvance: false,
					thumbnails: false,
					height: 'auto',
					navigation: false,
					navigationHover: false,
					playPause: false,
					loader: 'none',
					fx: 'scrollHorz',
					Cols: 4,
					Rows: 1,
					slicedCols: 4,
					slicedRows: 1,
					transPeriod: 500
				});
			}
		});
		
		jQuery(function(jQuery){
			if (jQuery('div').is('#gall-image')){
				jQuery('#gall-image').camera({
					autoAdvance: false,
					mobileAutoAdvance: false,
					thumbnails: false,
					height: 'auto',
					navigation: false,
					navigationHover: false,
					playPause: false,
					loader: 'none',
					fx: 'scrollHorz',
					Cols: 4,
					Rows: 1,
					slicedCols: 4,
					slicedRows: 1,
					transPeriod: 500
				});
			}
		});
	
	
	
		
	
		//jQuery.fn.FlyUpSlider({
		//	id: '#secondary-thumbs',
		//	left: '#secondary div.camera_next',
		//	right: '#secondary div.camera_prev',
		//	round: true,
		//	delta: 340,
		//	deltaerror:0 
		//});
	
	
	
	jQuery('.tab_nav li').click(function(){
		var num = jQuery(this).attr('id');
		if (!jQuery(this).hasClass('active')){
			jQuery('.tab_nav li.active').removeClass('active'), jQuery(this).addClass('active');
			jQuery('.tabs.active').removeClass('active'), jQuery('.tabs.'+num).addClass('active');
		}
	});



});
jQuery.fn.goLink = function(settings) {
	settings = jQuery.extend({
		min: 1,
		fadeSpeed: 200
	}, settings);
	return this.each(function() {
		var el = jQuery(this);
		el.hide();
		jQuery(window).scroll(function() {
			if(jQuery(window).scrollTop() >= settings.min)
			{
				el.fadeIn(settings.fadeSpeed);
			}
			else
			{
				el.fadeOut(settings.fadeSpeed);
			}
		});
	});
};

function Testimonial(prev){
	if(prev){
		if(jQuery('.testimonials-list .testimonials-list-item.active').prev().length > 0){
			jQuery('.testimonials-list .testimonials-list-item.active').animate({opacity:0}).removeClass('active').prev().animate({opacity:1}).addClass('active');
		}else{
			jQuery('.testimonials-list .testimonials-list-item.active').animate({opacity:0}).removeClass('active');
			jQuery(jQuery('.testimonials-list .testimonials-list-item').last()).animate({opacity:1}).addClass('active');				
		}
	}else{
		if(jQuery('.testimonials-list .testimonials-list-item.active').next().length > 0){
			jQuery('.testimonials-list .testimonials-list-item.active').animate({opacity:0}).removeClass('active').next().animate({opacity:1}).addClass('active');
		}else{
			jQuery('.testimonials-list .testimonials-list-item.active').animate({opacity:0}).removeClass('active');
			jQuery(jQuery('.testimonials-list .testimonials-list-item')[0]).animate({opacity:1}).addClass('active');				
		}
	}
};

jQuery(window).load(function() {
    jQuery('.wpb_flexslider').each(function() {
        var this_element = jQuery(this);
        var sliderSpeed = 800,
            sliderTimeout = parseInt(this_element.attr('data-interval'))*1000,
            sliderFx = this_element.attr('data-flex_fx'),
            slideshow = true;
        if ( sliderTimeout == 0 ) slideshow = false;

        this_element.flexslider({
            animation: sliderFx,
            slideshow: slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: sliderSpeed,
            smoothHeight: true
        });
    });

});