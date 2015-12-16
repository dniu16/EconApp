Template.submit2.events({ 
	'submit form': function(event){
		event.preventDefault();
		var econBidVar2 = event.target.FPU.value; 
		$('#status').text('Thank you!');

		Econ.insert({
			name: econBidVar2,
		});
	} 
});

Template.submit2.rendered = function() {
	$('#status').text('');
}
