Meteor.publish('wines', function(){ 
	return Wines.find({supplier: this.userId});
});

Meteor.publish('countries', function(){
	return Countries.find({});
});

Meteor.publish('singleWine', function(id){
	check(id, String);
	return Wines.find({_id: id});
});



