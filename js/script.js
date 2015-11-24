

/* js file */
(function( window, undefined ){

	//buttons that we will click to
	//switch content 
	var buttons = $(".controls a");
	var divName = $(".box").find("div");

	//on function creates events 
	buttons.on("click", function(e){

		var className = $(this).data("page");
		divName.hide();

		$(className).slideDown(1000);

        e.preventDefault();

    });

    divName.hide();
    $(".p1").slideDown(1000);



})( window, undefined );



