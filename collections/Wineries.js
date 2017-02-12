Wineries = new Mongo.Collection('wineries');

/*
	{name: 'winery1', regionId: res[0].id },
	{name: 'winery2', regionId: res[1].id},
	{name: 'winery3', regionId: res[2].id }

*/


WinerySchema = new SimpleSchema({
	winery: {
		type: String,
		max: 200
	},
	region: {
		type: RegionSchema
	}

});

Wineries.attachSchema(WinerySchema);