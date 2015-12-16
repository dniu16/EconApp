Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
			} 
			else if (email == 'dniu16@choate.edu') {
				Router.go('history')
			}
			else{
				Router.go("day1");
			}
		});
	}
});