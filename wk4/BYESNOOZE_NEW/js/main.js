
(function($){
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


	$("#sinBtn").click(function(){
			console.log('blah');
			var username = $('#user').val();
			var pass = $('#pass').val();

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
$('#troubleBtn').click(function(e){
	console.log("test")
	e.preventDefault();
	$.get('xhr/logout.php', function(){
		window.location.assign('index.html')
	})
	console.log("lougout")
})


// accordian for breif description

		// $("#sortable li .project-list").click(function(e){
		// 	e.preventDefault();
		// 	console.log("aaaaaaaaaaaa");
		// 	//hide all divs
		// 	$(".des").hide();
		// 	var project = $(this).find('a').attr('data');

		// 	$('#'+project).show();

		// }).eq(0).addClass("active");

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
	$("#datepicker").datepicker();
	$("#addProject").on('click',function(e){
		console.log("blah")
		e.preventDefault();
		var proName = $("#projectName").val();
		var proDes = $("#projectDes").val();
		var proDue = $("#datepicker").val();
		var status = $('input[name="status"]:checked').prop("id");
		console.log("aaahhhhhhhhhhh")
		console.log(proDue);

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
					console.log(response.error);
				}else{
					alert("Project added successfully");
					window.location.assign('dash.html');
				}
			}
		});
	});

	// (function(){
	// 	$("#datepicker").datepicker();
	// })


	var bad = function(pid){
		$(".projDesc").empty();
		$.ajax({
			url 	: 'xhr/get_projects.php',
			type 	: 'post',
			dataType: 'json',
			success : function(response){
				console.log(response);
				console.log("Testing for success.");
				projects = response.projects;
				for(var i=0, max = projects.length; i < max; i++){
					console.log('running');
					if(projects[i].id === pid){
						$(".projDesc").append('<p>' + projects[i].projectDescription + '</p>')
					}
				}
				
			}

		})

	}

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
						var face;

						if(result.status == 'active') {
							 face = '<img class="status" src="img/active.png" />';
						} else if(result.status == 'late'){
							 face ='<img class="status" src="img/passDue.png" />';
						}else if(result.status == 'complete'){
							 face =	'<img class="status" src="img/complete.png" />';
						}else{
							 face ='<img class="status" src="img/urgent.png" />';
						};
						console.log(face);
						console.log(result.status);
						console.log(result.dueDate);

						// $('.projects').append(

						// 	// '<div style = "border: 1px solid black">' +
						// 	"<input class = 'projectName' type = 'hidden' value = '" + result.id + "'>" + 
						// 	// 'Project ID: ' + result.id + '<br>' +
						// 	// "<input class='myStatus' value = result.myStatus>" + '<br>' +
      //                       face  + '<br>' +
						// 	 + '' + result.projectName + '<br>' +
						// 	'Due Date: ' + result.dueDate + '<br>' +
						// 	// 'Project Description: ' + result.projectDescription + '<br>' +
						// 	'<img class = "delete" data-projectId="' + result.id + '" src="img/delete.png">' +
						// 	//'<button class = "editbtn">Edit</button>' +
						// 	'</div><br>'
						// );

						$('#sortable').append(
							'<li class="clicker" data-projectId="' + result.id + '"><div class="project-list"> <div class="project">' + face + '<p class="pName" class="projectName">' + result.projectName + '</p><p class="projectDue">Due Date:' + result.dueDate + '</p><a><img  class="delete" src="img/delete.png" data-projectId="' + result.id + '"/></a></div></div><div class="cf"></div></li>'
							
						);
							
					};

					$(".clicker").on("click", function(e){
							console.log("it's not working");
							var pid = $(this).attr("data-projectId");
							console.log(pid);
							bad(pid);
						});

					$('.delete').on('click', function(e){
						var pid = $(this).attr("data-projectId");
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
					}); 
				} 
			} 
		}) 
	};
	projects();

	// ------------------------------sortable----------------------------
	$("#sortable").sortable();
	$("#sortable").disableSelection();
		
	var clock;
			
			$(document).ready(function() {
				clock = $('.clock').FlipClock({
					clockFace: 'TwelveHourClock'
				});
			});
})(jQuery)















