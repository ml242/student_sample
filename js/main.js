// this is the same as a $(document).ready(){

// });
$(function(){
	// sanity check
	console.log("hey, i'm all up in your app making behaviours happen on your computer");


// "jQuery please bind an event to the object with a class of left-button and then do some stuff"
$(".left-button").on("click", function(){
	// stuff goes here
});

$(".right-button").on("click", function(){
	// sanity check on the function
	console.log('right button reporting form duty');
	// select the filmstrip with jQuery and assign it to a a variable.
	var filmstrip = $('.filmstrip');
	// change the css on each click, negative ='s is going to subtract another 100px's each time
	filmstrip.css({'margin-left': '-=15px'});
});


});