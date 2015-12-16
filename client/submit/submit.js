Template.submit.events({ 
    'submit form': function(event){
      event.preventDefault();
      var econBidVar = event.target.RMUprice.value; 
      var econBidVar2 = event.target.RMUquantity.value; 
      $('#status').text('Thank you!');
      Econ.insert({
        name: econBidVar,
        price: econBidVar2,
      });
    }
});

Template.submit.rendered = function() {
	$('#status').text('');
}