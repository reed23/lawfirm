

/* js file */
(function( window, undefined ){
//buttons that we will click to
	//switch content 
	var nav = $(".nav2");
	var navButton = $('.navButton');
	var buttons = $(".controls a");
	var divName = $(".content_area").find("div");

	//on function creates events 
	buttons.on("click", function(e) {
		e.preventDefault();

		buttons.removeClass('myFeature-active');

		var button = $(this);
		var className = button.data("page");

		//button.css("background-color", "yellow");
		button.addClass('myFeature-active');

		divName.hide();
        $(className).show();
    });

    navButton.on('click', function(d){
    	nav.show();
    });

    divName.hide();

    $(".p1").slideDown(4000);

    $('.nav2').waypoint({
    	handler: function (direction) {
    		if (direction == "up") {
    			$('.nav2').removeClass('is-fixed');
    		} else{
    			$('.nav2').addClass('is-fixed');
    		}
    		
    	}
    });
    $( window ).resize( function( e ){

        if( $( window ).width() > 600 ){
            nav.removeAttr( "style" );
            console.log( nav );
        }


    } );

    $(document).ready(function() {
                    $("#my-menu").mmenu();
                 });

    

 
    

 



})( window, undefined );
 

