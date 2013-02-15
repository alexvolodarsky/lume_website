/*!
 *  jQuery FlyUpSlider plugin 0.2.0 VERSION
 *  04.2012
 *	
 *	
 *		History:
 *	
 *  06.2012 ver.0.2.0
 *		added:
 *	+ settings.mainPhoto (not finished)
 *	+ settings.reverse
 */

(function(jQuery) {
	
	jQuery.fn.FlyUpSlider = function(settings) {

		settings = jQuery.extend({
			 id:			'#gallery'
			,left:			'.LArrow'
			,right:			'.RArrow'
			,time:			1000
			,round:			false
			,vertical:		false
			,delta:			0
			,deltaerror:	0
			,mouseover:		false
			,mainPhoto:		false
			,reverse:		false
			
		},settings);
		
		var interval, wmain, c, w, time, pos, currentway, errorpos;
		var slidemove = false;
		var circular = false;
		function intervalSlider(id, way){
			return window.setInterval(function() {
				  slideonce(id, way);
				  }, 1500 );
		}

		
		function _initialize(){

				if (settings.vertical){
					 var visiblelength = parseInt(jQuery(settings.id).parent().outerHeight() + settings.deltaerror); // visible length
				 }else{
					 var visiblelength = parseInt(jQuery(settings.id).parent().outerWidth() + settings.deltaerror); // visible length
				 }
			 /// add li for circular
			 if (settings.round){
				 circular = settings.round;
				 var templength = 0;
				 jQuery(settings.id+' ul li').each(function(){
					 if (settings.delta){ 
						 templength += settings.delta;
					 }else{
						 if (settings.vertical){
							 templength += jQuery(this).outerHeight();
						 }else{
							 templength += jQuery(this).outerWidth();
						 }
					 }
					 if (templength > visiblelength){
						 return false;
					 }else{
						 jQuery(settings.id+' ul').append('<li>'+jQuery(this).html()+'</li>');
					 }
				 });
			 }
			 
			 c = jQuery(settings.id+' li').length; // elements count
			 
			 if (settings.delta){
				 w = settings.delta;
			 }else{
				 if (settings.vertical){
					 w =  jQuery(settings.id+' li').outerHeight();   // animated length
				 }else{
					 w =  jQuery(settings.id+' li').outerWidth();   // animated length
				 }
			 }
			
			if (settings.vertical){
					if (settings.round){
						wmain = parseInt(jQuery(settings.id).parent().outerHeight() + settings.deltaerror) - (w * c) ; // max position for circular
					}else{
						wmain = parseInt(jQuery(settings.id).parent().outerHeight() + settings.deltaerror) ; // max position
					}
			}else{
					if (settings.round){
						// wmain = parseInt(jQuery(settings.id).parent().outerWidth() + settings.deltaerror - (w * c)) ; // max position for circular
						wmain = parseInt(jQuery(settings.id).parent().innerWidth() + settings.deltaerror - (w * c)) ; // max position for circular
					}else{
						// wmain = parseInt(jQuery(settings.id).parent().outerWidth()) + settings.deltaerror  ; // max position for circular
						wmain = parseInt(jQuery(settings.id).parent().innerWidth()) + settings.deltaerror  ; // max position for circular
					}
					
			}
			 // console.log(wmain); console.log(jQuery(settings.id).parent().outerWidth());
			 // console.log((w * c));
			 if (!settings.time) { // slide time
				 time = 1000; 
			 }else{
				 time = settings.time; 
			 }
		}
		
		function slideonce(id , way){
			if (settings.vertical){
				pos = Math.abs(parseInt(jQuery(settings.id).css('top')));
				currentway = 'top';
			}else{
				currentway = 'left';
				pos = Math.abs(parseInt(jQuery(settings.id).css('left')));
			}
			if (way == 'left'){
				if (slidemove == false){
					// console.log(pos);
					// console.log(Math.abs(parseInt(wmain)));
					if (pos >= w * c - Math.abs(parseInt(wmain))){
						if (circular){
							// console.log(pos);
							jQuery(settings.id).css(currentway , '0px');
							slidemove = true;
							if (settings.vertical){
								jQuery(settings.id).animate({
								    top: '-='+w
								  }, time, function() {
									  slidemove = false;
								});
							}else{
								jQuery(settings.id).animate({
								    left: '-='+w
								  }, time, function() {
									  slidemove = false;
								});
							}
						}else{
							return false;
						}
					}else{
						slidemove = true;
						if (settings.vertical){
							jQuery(settings.id).animate({
							    top: '-='+w
							  }, time, function() {
								  slidemove = false;
							});
						}else{
							jQuery(settings.id).animate({
							    left: '-='+w
							  }, time, function() {
								  slidemove = false;
							});
						}
					}
				}
			}else{
				if (slidemove == false){
					if (parseInt(jQuery(settings.id).css(currentway)) >= 0)	{
						if (circular){
							jQuery(settings.id).css(currentway ,  parseInt(wmain+w)+'px');
							if (settings.vertical){
								jQuery(settings.id).animate({
								    top: '+='+w
								  }, time, function() {
									  slidemove = false;
								});
							}else{
								// console.log(jQuery(settings.id).css('left'));
								jQuery(settings.id).animate({
								    left: '+='+w
								  }, time, function() {
									  slidemove = false;
								});
							}
							
						}else{
							return false;
						}
					}else{
						slidemove = true;
						if (settings.vertical){
							jQuery(settings.id).animate({
							    top: '+='+w
							  }, time, function() {
								  slidemove = false;
							});
						}else{
							jQuery(settings.id).animate({
							    left: '+='+w
							  }, time, function() {
								  slidemove = false;
							});
						}
					}
				}
			}
			
		}

		jQuery(settings.left).click(function(e){
				e.preventDefault();
				clearInterval(interval);
				if(settings.reverse){
					slideonce(settings.id, 'right');
				}else{
					slideonce(settings.id, 'left');
				}
		 });
		 jQuery(settings.right).click(function(e){
				e.preventDefault();
				clearInterval(interval);
				if(settings.reverse){
					slideonce(settings.id, 'left');
				}else{
					slideonce(settings.id, 'right');
				}
		 });
		
		if(settings.mainPhoto){
			jQuery(settings.id+' img').click(function(e){
				e.preventDefault();
				// srcMain = jQuery(this).attr('src');
				srcMain = jQuery(this).parent('a').attr('rel');
				// console.log(srcMain);
				// jQuery('#main-photo').attr('src', srcMain);
				jQuery('#main-photo').attr('src', '/phpThumb/phpThumb.php?w=375&f=png&src='+srcMain);
				jQuery('#main-photo').parent('a').attr('href', srcMain);
				// console.log(jQuery('#main-photo').parent('a').attr('href'));
				jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
			});
		}

		if (settings.mouseover){
			jQuery(settings.left).mouseover(function(e){
			  	e.preventDefault();
			  	interval = intervalSlider(settings.id, 'left');
			  	slideonce(settings.id, 'left');
			 }).mouseout(function(e){
				 	e.preventDefault();
				 	clearInterval(interval);
			 });

			jQuery(settings.right).mouseover(function(e){
				 	e.preventDefault();
				 	interval = intervalSlider(settings.id, 'right');
				 	slideonce(settings.id, 'right');
			 }).mouseout(function(e){
					e.preventDefault();
					clearInterval(interval);
			 });
		}

		
		

		
			return _initialize();
	};
})(jQuery);