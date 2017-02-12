/* jshint validthis:true */
Countries = new Mongo.Collection('countries');

/*
              {name: 'France'},
              {name: 'Spain'},
              {name: 'New Zealand'}
*/


Countries.allow({
  insert: function(userId, doc) {
    return !!userId; //if userId available then insert
  }
});

CountrySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Country"
	}

});

Countries.attachSchema(CountrySchema);

// Validate an object against the schema
isValid = CountrySchema.namedContext("myContext").validate({name: "France"});


// Validation errors are available through reactive methods
if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      var context = CountrySchema.namedContext("myContext");
      console.log('context', context);

      if (!context.isValid()) {
        console.log(context.invalidKeys());
      }
    });
  });
}