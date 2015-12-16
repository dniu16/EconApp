Meteor.startup(function() {
	var jeff = Accounts.findUserByEmail('dniu16@choate.edu');
	if (jeff != null) {
		Roles.addUsersToRoles(jeff._id, 'super-admin', Roles.GLOBAL_GROUP)
	}
})