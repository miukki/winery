

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
}); 

FlowRouter.route('/list', {
	name: 'list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Wineries'});
	}
}); 

