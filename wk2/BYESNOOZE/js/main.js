$(function(){
	// $.ajax({
	// 	url: 'xhr/list.php',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: function(response){
	// 		// console.log(response);
	// 		var langs = response.languages;
	// 		var html = '';

	// 		for(var i=0, max = langs.length; i<max; i++){
	// 			html += '' +
	// 			'<div class="language">' +
	// 			'<h2>' + langs[i].name + '</h2>' +
	// 			'<p id="descrip">' + langs[i].description + '</p>'+
	// 			'<p id="version">' + langs[i].version + '</p>' + 
	// 			'</div>';
	// 		};
	// 		$('#languages').append(html);
	// 	}
	// })

		function login(){
			var username = $('#user').val();
			var pass = $('#pass.').val();

			$.ajax({
				url: 'xhr/login.php',
				data:{
					user: username,
					pass: pass
				},
				type:'post'
				dataType: 'json',
				success: function(response){
					if(response.user){
						loadApp();
					}else{
						loadLanding();
					}
				}
			});
		}

		function loadApp(){
			$('#wrap').empty();
		}












});