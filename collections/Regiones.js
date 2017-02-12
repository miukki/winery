Regiones = new Mongo.Collection('regiones');

/*
  {name: 'Bordaux', countryId: res[0].id},
  {name: 'Catalan', countryId: res[0].id},
  {name: 'White', countryId: res[2].id}

*/

RegionSchema = new SimpleSchema({
	name: {
		label: "Region",
		type: String,
		max: 200
	},
	country: {
		type: CountrySchema
	}

});

Regiones.attachSchema(RegionSchema);