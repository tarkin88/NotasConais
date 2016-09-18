(function (){
	'use strict';
	angular
		.module('app')
		.config(RouteConfig);

	function RouteConfig($stateProvider){
		$stateProvider
            .state('details', {
            	url: '/details/:id',
            	templateUrl: 'js/components/details/details.html',
            	controller: 'DetailsController as vm'
        });
	}
})();