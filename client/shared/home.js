if (Meteor.isClient) {
	Session.setDefault('showProductDialog', false);
	Session.setDefault('editing_product', null);	
	





Handlebars.registerHelper("formatDate", function(datetime) {
	  if (moment) {
	    return moment(datetime).format("MM/DD/YYYY");
	  }
	  else {
	    return datetime;
	  }
	});	


}

