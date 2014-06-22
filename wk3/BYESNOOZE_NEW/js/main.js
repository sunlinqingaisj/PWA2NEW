
$(function(){
	$('#supBtn').on('click', function(event){
		event.preventDefault();


		$(".overlay")
		.fadeIn()
		.find("#model")
		.fadeIn();

	});

	$(".close").on("click", function(event){
		event.preventDefault();
		$(".overlay")
		.fadeOut()
		.find("#model")
		.fadeOut();

	});

	console.log("fjieoqjfieofqewq");

	$('#login').on('click', function(event){
		event.preventDefault();

		$(".sin-overlay")
		.fadeIn()
		.find("#sin-modal")
		.fadeIn()
		.find("#signIn")
		.fadeIn();
		

	});

	$(".sin-close").on("click", function(event){
		event.preventDefault();
		$(".sin-overlay")
		.fadeOut()
		.find("#sin-modal")
		.fadeOut();

	});

	$("#sinBtn").click(function(){
			console.log('blah');
			var username = $('#usernameInput').val();
			var pass = $('#passwordInput').val();

			console.log(username,pass);

			$.ajax({
				url: 'xhr/login.php',
				data:{
					username: username,
					password: pass
				},
				type:'post',
				dataType: 'json',
				success: function(response){
					console.log(response);
					if(response.user){
						console.log('success');
						username = response.user.user_n;
						userId = response.user.id;
						window.location.assign("dash.html")
					}else{
						console.log("invalid username and/or password");
					}
				}
			});

			// check login
			$.getJSON("xhr/check_login.php", function(data){
				$.each(data, function(key, value){
					$(".welcome").html('value.username');
				})
			})
		});

	// Register!!!!!!!!!!!!!!!!!!!!!
	$("#submit").click(function(e){
		e.preventDefault();
		var user = $('#username').val();
		var pass = $('#password').val();
		var email = $('#email').val();

			$.ajax({
				url: 'xhr/register.php',
				data: {
					username: user,
					password: pass,
					email: email,
				},
				type: 'post',
				dataType:'json',
				success: function(response){
					if(response.error){
						console.log('somethings wrong')
					}else{
						console.log('your are registered');
						usernmae = response.user.user_n
						window.location.assign("dash.html")
					}
				}
			});
	});
// log out!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$('#logout').click(function(e){
	console.log("test")
	e.preventDefault();
	$.get('xhr/logout.php', function(){
		window.location.assign('index.html')
	})
	console.log("lougout")
})


// accordian for breif description

		$(".tabs li").click(function(e){
			e.preventDefault();
			console.log("aaaaaaaaaaaa");
			//hide all divs
			$(".des").hide();
			var project = $(this).find('a').attr('data');

			$('#'+project).show();

		}).eq(0).addClass("active");

		// Add project

		$('#plus').on('click', function(event){
		event.preventDefault();
		$(".overlay")
		.fadeIn()
		.find("#add-modal")
		.fadeIn();

	});

	$(".close").on("click", function(event){
		event.preventDefault();
		$(".overlay")
		.fadeOut()
		.find("#add-modal")
		.fadeOut();

	});

	// add new project
	$("#addProject").on('click',function(e){
		console.log("blah")
		e.preventDefault();
		var proName = $("#projectName").val();
		var proDes = $("#projectDes").val();
		var proDue = $("#projectDue").val();
		var status = $('input[name="status"]:checked').prop("id");

		$.ajax({
			url: 'xhr/new_project.php',
			type: "post",
			dataType: "json",
			data:{
				projectName: proName,
				projectDescription: proDes,
				dueDate: proDue,
				status: status
			},
			success:function(response){
				if(response.error){
					alert("Testing for success. Project creation failed");
					console.log("ahhhhh~you are wrong");
				}else{
					alert("Project added successfully");
				}
			}
		});
	});

	// display new project
	var projects = function(){

		$.ajax({
			url		: 'xhr/get_projects.php',
			type 	: 'get',
			dataType: 'json',
			success : function(response){
				if(response.error){
					console.log(response.error);

				} else {
					
					for(var i = 0, j = response.projects.length; i < j; i++){
						var result = response.projects[i];

						$('.projects').append(
							'<div style = "border: 1px solid black">' +
							"<input class = 'projectid' type = 'hidden' value = '" + result.id + "'>" + 
							// 'Project ID: ' + result.id + '<br>' +
							'Project Name: ' + result.projectName + '<br>' +
							'Project Description: ' + result.projectDescription + '<br>' +
							'<button class = "deletebtn">Delete</button>' +
							//'<button class = "editbtn">Edit</button>' +
							'</div><br>'
						);
					};
					$('.delete').on('click', function(e){
						var pid = $(this).parent().find(".projectid").val();
						console.log('test delete');
						$.ajax({
							url 	: 'xhr/delete_project.php',
							data 	: { projectID: pid },
							type 	: 'post',
							dataType: 'json',
							success : function(response){
								console.log("Testing for success.");

								if(response.error){
									alert(response.error);

								} else {
									console.log(result.id);
									window.location.assign('dash.html');

								};
							}
						});
					}); /* End Delete */
				} /* End Else */
			} /* End Success */
		}) /* End Ajax Call */
	};
	projects();
		


});















