(function (){
	'use strict';
	angular
		.module('app')
		.config(RouteConfig);
	function RouteConfig ($stateProvider){
		$stateProvider
            .state('app', {
            	url: '/login',
            	templateUrl: 'js/components/login/login.html',
            	controller: 'LoginController as vm'
        });
	}
})();