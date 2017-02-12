if (Meteor.isClient){
	Accounts.onLogin(function () {
		FlowRouter.go('wines');
	});
	Accounts.onLogout(function () {
		FlowRouter.go('home');
	});

}

FlowRouter.triggers.enter([function (context, redirect) {
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('wines');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
}); 

FlowRouter.route('/wines/add', {
	name: 'wines-add',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'AddWine'});
	}
});


FlowRouter.route('/countries/add', {
  name: 'countries',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'AddCountry'});
  }
});

FlowRouter.route('/wines', {
	name: 'wines',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Wines'});
	}
});

FlowRouter.route('/wines/:id', {
	name: 'wines-view',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ViewWine'});
	}
});

