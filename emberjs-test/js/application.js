window.App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});