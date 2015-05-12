Template.ahorroGen.onRendered (function(){
	$('#genahorro').modal()
})

Template.ahorroGen.helpers({
	showAhorroGen : function(){
	return Session.get('showAhorroGen');
	},
});

Template.ahorroGen.events({
	'click .cerrar' : function(event,tmpl){
		return Session.set('showAhorroGen',false)
	}
});