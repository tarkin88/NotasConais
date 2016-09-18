(function () {
	'use strict';
	angular
		.module('app')
		.config(RouteConfig);
	function RouteConfig($stateProvider){
		$stateProvider
			.state('newNote',{
				cache: false,
				url: '/new_note',
				templateUrl: 'js/components/new.note/new_note.html',
				controller: 'NewNoteController as vm'
			});
	}
})();