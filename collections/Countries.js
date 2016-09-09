/* jshint validthis:true */
Countries = new Mongo.Collection('countries');

/*
              {name: 'France'},
              {name: 'Spain'},
              {name: 'New Zealand'}
*/

CountrySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Country"
	}

});

Countries.attachSchema(CountrySchema);

// Validate an object against the schema
obj = {name: "France"};
isValid = CountrySchema.namedContext("myContext").validate(obj);


// Validation errors are available through reactive methods
if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      var context = CountrySchema.namedContext("myContext");
      if (!context.isValid()) {
        console.log(context.invalidKeys());
      }
    });
  });
}