$(function(){

	var templateLanguages = $('#search-results').html();
	var templateFunction = Handlebars.compile(templateLanguages);

	$('.search-form').on('submit', function(e){
		e.preventDefault();
		var language = $(this).find('[name=languages]').val();
		var languageData = {
			search: language
		};
		// Search value
		console.log(languageData);

		$.get('/search', {}, function(languageJSON){
		var outputHTML = templateFunction(languageJSON);
			var keys = Object.keys(languageJSON);
			console.log(keys);

			for(var key in languageJSON){
				console.log('languages: ', key);
			}

			for(var i = 0; i < keys.length; i++){
				if(languageData.search === keys[i]){
					$('#results').append('<li>' + keys[i] + '</li>')
					console.log(keys[i]);
				}
			}

		});

		$(this).find('[name=languages]').val('');
	});

	// console.log(templateLanguages);

});