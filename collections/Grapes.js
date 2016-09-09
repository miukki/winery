/* jshint validthis:true */
Grapes = new Mongo.Collection('grapes');

GrapeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	}

});

/*
              {name: 'Cabernet franc'}, //=?belongs to type ?
              {name: 'Merlot'},
              {name: 'Trempanillo'},
              {name: 'Chardonnay'},
              {name: 'Cabernec sauvignon'}

*/

Grapes.attachSchema(GrapeSchema);
