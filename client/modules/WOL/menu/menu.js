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
		'click .ahorro': function(event,tmpl){
			Session.set('showAhorroGen',true)
			
		},
		'click .cerrar' : function(event,tmpl){
			return Session.set('showAhorroGen',false)
		}
});


Template.menu.helpers({
	showAhorroGen : function(){
	return Session.get('showAhorroGen');
	}
})

