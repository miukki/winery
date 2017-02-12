Wines = new Mongo.Collection('wines');

Wines.allow({
	insert: function(userId, doc) {
		return !!userId; //if userId available then insert
	}
});

PriceSchema = new SimpleSchema({
	currency: {
		type: String
	},
	amount: {
		type: String
	}
 
});

YearSchema = new SimpleSchema({
	year: {
		type: Number,
		label: "Year",
		max: 2016,
		min: 1900,
		optional: true
	}

});

/*
	{year: chance.year({min: 1900, max: 2016}), title: 'Chateau blabla', wineryId: res[1][0].id, typeId: res[0][0].id, description: 'In the glass, the aromatics lean toward the floral and citrus families with rose petals, lemon blossom, and just a hint of ripe melon sneaking ...', grapeIds: [res[2][0].id, res[2][1].id], price: chance.integer({min: 100, max: 500}) },
	{year: chance.year({min: 1900, max: 2016}), title: 'Cliffside bla', wineryId: res[1][1].id, typeId: res[0][1].id, description: 'A great gift for people who enjoy both reds and whites. Item 033...', grapeIds: [res[2][2].id, res[2][3].id, res[2][4].id], price: chance.integer({min: 100, max: 500})},

*/

WineSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},

	isHidden: {
		type: Boolean, 
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},

	desc: {
		type: String,
		label: "Description",
		optional: true
	},
	
	year: {
		type: YearSchema
	},

	type: {
		type: [TypeSchema]
	},

	winery: {
		type: WinerySchema
	},

	price: {
		type: [PriceSchema]
	},

	grapes: {
		type: [GrapeSchema]
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
			console.log('this', this);
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}


});

Wines.attachSchema(WineSchema);