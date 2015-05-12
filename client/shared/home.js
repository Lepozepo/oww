if (Meteor.isClient) {
	Session.setDefault('showAhorroGen', false);
	





Handlebars.registerHelper("formatDate", function(datetime) {
	  if (moment) {
	    return moment(datetime).format("MM/DD/YYYY");
	  }
	  else {
	    return datetime;
	  }
	});	


}

