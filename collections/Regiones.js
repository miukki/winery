Regiones = new Mongo.Collection('regiones');

RegionSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	country: {
		type: CountrySchema
	}

});

Regiones.attachSchema(RegionSchema);