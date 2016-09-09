

FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
}); 

FlowRouter.route('/list', {
	name: 'list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Wines'});
	}
}); 

