(function($) {	
		var settings = {
			 showCaptions:true,
			 imageSelector:'img',
			 captionSelector:'.caption',
		 	 displayContainer:'#displayImage',
			 fadeOutDuration:500,
			 fadeInDuration:800,
			 startIndex:0
        }

	var data = {
		images:[],
		imageIndex:0
	}
		
	var methods = {
		init : function(options){
			//console.log('init imageviewer shuttle');
			
			if(options){
				$.extend(settings,options);
				
				if(options.startIndex){
					data.imageIndex = options.startIndex;
				}
			}
			
			return this.each(function(){
				data.images = [];
				
				$(this).find('li').each(function(){
					
					data.images[data.images.length] = {
														img:$(this).find(settings.imageSelector).attr('src'),
														caption:$(this).find(settings.captionSelector).text()
							  						  };	
				});

				var domID = $(this).attr('id');
				$('#'+domID).css('display','none');

				methods.updateImage();
			});
			
		},
		updateImage:function(){
			var image = '<img src="'+data.images[data.imageIndex].img+'" id="currentDisplayImg"/>';
			
			$(settings.displayContainer).html(image);
			$('#currentDisplayImg').css('opacity',0).load(methods.onImgLoad);
			
			if(settings.showCaptions == true){
				var caption = '<div class="imgcaption">'+data.images[data.imageIndex].caption+'</div>';
				$(settings.displayContainer).append(caption);	
				$('.imgcaption').css('opacity',0);
			}
		},
		onImgLoad:function(){
			$('#currentDisplayImg').unbind('load',methods.onImgLoad);
			$('#currentDisplayImg').animate({opacity:1},settings['fadeInDuration'],'linear');
			
			if(settings.showCaptions == true){
				$('.imgcaption').animate({opacity:1},settings['fadeInDuration'],'linear');
			}
		},
		fadeOut:function(){
			$('#currentDisplayImg').animate({opacity:0},settings['fadeOutDuration'],'linear',methods.updateImage);
		},
		nextImage:function(){
			if(data.imageIndex < data.images.length-1){
				data.imageIndex++;
			}else{
				data.imageIndex = 0;
			}
			methods.fadeOut();
		},
		prevImage:function(){
			if(data.imageIndex > 0){
				data.imageIndex = data.imageIndex-1;
			}else{
				data.imageIndex = data.images.length-1;
			}
			
			methods.fadeOut();
		},
		showImage:function(imgIndex){
			data.imageIndex = imgIndex;
			methods.fadeOut();
		}
	};
	
	$.fn.imageviewer = function(method) {
			// Method calling logic
		    if ( methods[method]) {
		      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		    } else if ( typeof method === 'object' || ! method ) {
		      return methods.init.apply( this, arguments );
		    } else {
		      $.error( 'Method ' +  method + ' does not exist on jQuery.imageviewer' );
		    }
	  };
	})( jQuery );