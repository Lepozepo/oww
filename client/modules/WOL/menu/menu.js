Template.menu.events({
	'click #facebook-login': function(event) {
		Meteor.loginWithFacebook({}, function(err){
			if (err) {
				throw new Meteor.Error("Facebook login failed");
			}
		});
	},
 
	'click #logout': function(event) {
		Meteor.logout(function(err){
			if (err) {
				throw new Meteor.Error("Logout failed");
			}
		})
	},
		// Let's repair this one now that we have the popup pre-inserted into the DOM
		'click .ahorro': function(){
			// fuck this
			// Session.set('showAhorroGen',true)

			// add this in the correct place
			$('#genahorro').modal()
		},

		// This obviously doesn't work because it's not under the correct template *sape* hiciste lo que te estaba diciendo, metiste el boton para abrir la caja fuerte adentro de la caja fuerte
		// It needs to be under Template.ahorrogen
		// If you control it via a helper you'll lose the animation so let's not do that

		// 'click .cerrar' : function(event,tmpl){
		// 	return Session.set('showAhorroGen',false)
		// }
});

// You don't need sessions for this, bootstrap controls this for you and templates keep everything tidy
// Template.menu.helpers({
// 	showAhorroGen : function(){
// 		return Session.get('showAhorroGen');
// 	}
// })

