(function (){
	'use strict';
	angular
		.module('app')
		.config(RouteConfig);
	function RouteConfig ($stateProvider){
		$stateProvider
            .state('login', {
            	url: '/login',
            	cache:false,
            	templateUrl: 'js/components/login/login.html',
            	controller: 'LoginController as vm'
        });
	}
})();