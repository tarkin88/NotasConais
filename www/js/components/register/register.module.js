(function(){
	'use strict';
	angular
		.module('app')
		.config(RouteConfig);
	function RouteConfig($stateProvider){
		$stateProvider
			.state('register', {
				cache:false,
				url: '/register',
            	templateUrl: 'js/components/register/register.html',
            	controller: 'RegisterController as vm'
			});
	}
})();