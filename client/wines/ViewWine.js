
Template.ViewWine.onCreated(function(){
	this.autorun(function () {
		var id = FlowRouter.getParam('id');
		this.subscribe('singleWine', id);
	}.bind(this));
});

Template.ViewWine.helpers({
		wine: ()=> {
			var id = FlowRouter.getParam('id');
			return Wines.findOne({_id: id});
		}
});
