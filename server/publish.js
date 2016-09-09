Meteor.publish('wines', function(){ 
	return Wines.find({supplier: this.userId});
});