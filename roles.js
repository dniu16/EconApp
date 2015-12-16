var users = [
      {name:"Manager",email:"dniu16@choate.edu",roles:["manager"]},

    ];
//Roles.addUsersToRoles(jeffUserId, 'super-admin', Roles.GLOBAL_GROUP)

/*if (Roles.userIsInRole(jeffUserId, ['manage-bids', 'super-admin'], 'econ.com')) {

  {{> adminNav}}
/*
_.each(users, function (user) {
  var id;
id = Accounts.createUser({
    email: user.email,
    password: "jeff",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles, 'default-group');
  }

});
*/