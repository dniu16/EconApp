Template.history.rendered = function() {
	Session.set('selected', null);
}

Template.history.helpers({
	'player': function() {
		return Econ.find({},{sort:{name: -1}});
	},
	'isSelected': function() {
		if (this._id == Session.get('selected')) {
			return 'selected'
		} else {
			return '';
		}
	}
})
Template.history.events({ 
     "click .delete": function () {
      Econ.remove(Session.get('selected'));
    },
    'click .player': function() {
    	Session.set('selected', this._id);
    }
});