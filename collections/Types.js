/* jshint validthis:true */
Types = new Mongo.Collection('types');

TypeSchema = new SimpleSchema({
	type: {
		type: String,
		label: "Type"
	}

});

/*
	{title: 'white'},
	{title: 'red'},
	{title: 'rose'}

*/

Types.attachSchema(TypeSchema);
