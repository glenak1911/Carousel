    $(document).ready(function() { 
			//Connect to Olapic API

			var olapicAPI = "https://z1photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";
			
			//var request = new XMLHttpRequest();
/* 			request.onreadystatechange = function(){
				if(request.readyState == 4){
					if(request.status == 200){
						//Do Stuff
					}
					else {
						//Handle error
					}
				}
			}  */
			
			$.ajax({
			url: olapicAPI,
			dataType: 'jsonp',
			type: 'GET',
			success: function(olapicData){
				clone = olapicData.data._embedded.media.slice(0);			
			$.each(clone, function( i, clone ) {
			//console.log(clone.images.thumbnail);
			$( "#image"+i ).attr("src", clone.images.thumbnail);
			$( "#image"+i ).attr("src", clone.images.thumbnail);
			if ( i === 5 ) 
				return false;
			});
			}});
            $('#carousel_ul li:first').before($('#carousel_ul li:last'));  
      
    //when user clicks the image for sliding right  
    $('#right_scroll img').click(function(){  
            var item_width = $('#carousel_ul li').outerWidth() + 10;  
                var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;  
				$('#carousel_ul:not(:animated)').animate({'left' : left_indent},300,function(){                    
                $('#carousel_ul li:last').after($('#carousel_ul li:first')); 
                //$('#carousel_ul').css({'left' : '-210px'});
                });  
            });  
      
    //when user clicks the image for sliding left  
    $('#left_scroll img').click(function(){  
                var item_width = $('#carousel_ul li').outerWidth() + 10;  
                var left_indent = parseInt($('#carousel_ul').css('right')) + item_width;  
                $('#carousel_ul:not(:animated)').animate({'left' : left_indent},300,function(){ 
				$('#carousel_ul li:first').before($('#carousel_ul li:last')); 
				//$('#carousel_ul').css({'left' : '-210px'});  
				});  
            });  
      });  
