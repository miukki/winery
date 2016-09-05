
Wineries = new Mongo.Collection('wineries');

WinerySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	desc: {
		type: String,
		label: "Description",
		optional: true
	},
	region: {
		type: RegionSchema
	},
	createAt: {
		type: Date,
		label: "Create At",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
		
	},
	supplier: {
		type: String,
		label: "Supplier",
		autoValue: function () {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}


});

Wineries.attachSchema(WinerySchema);