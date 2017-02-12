//Meteor.subscribe('wines');

Template.Wines.onCreated(function(){
	this.autorun(function () {
		this.subscribe('wines');
	}.bind(this));
});

Template.Wines.helpers({
	wines: ()=> {

		return Wines.find({});
	}
});


//console.log(Meteor.settings.public.ga.account);
