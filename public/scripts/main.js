$(function(){

	var templateLanguages = $('#search-results').html();
	var templateFunction = Handlebars.compile(templateLanguages);



	$('.search-form').on('submit', function(e){
		e.preventDefault();
		console.log('test');
		// $.get('/search', {},)
	});



	console.log(templateLanguages);

});