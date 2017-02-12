
Template.Countries.onCreated(function(){
	this.autorun(function () {
		this.subscribe('countries');
	}.bind(this));
});


//Meteor.subscribe('countries');

Template.Countries.helpers({
		countries: ()=> {

			return Countries.find({});
		}

});
