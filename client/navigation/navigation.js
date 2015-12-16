Template.navigation.events({
		'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
			Router.go('login');
		}
	});

Template.navigation.helpers({
	'showAdminNav': function() {
		return Roles.userIsInRole(Meteor.userId(), ['manage-bids', 'super-admin']);
	}
})