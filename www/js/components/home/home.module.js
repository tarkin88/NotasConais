(function (){
	'use strict';
	angular
		.module('app')
		.config(routeConfig);
	function routeConfig ($stateProvider){
		$stateProvider
            .state('home', {
            	url: '/home',
            	templateUrl: 'js/components/home/home.html',
            	controller: 'HomeController as vm'
        });
	}
})();