(function (){
	'use strict';
	angular
		.module('app')
		.controller('HomeController', HomeController);

	function HomeController($log, localStorageService, $ionicLoading){
		/* data */
		var vm = this;
		vm.user= localStorageService.get('user');
		vm.notas = localStorageService.get('notas');

		/* methods */
		vm.viewDetail = viewDetail;

		/* functions */

		function viewDetail (note){
			$log.log(note);
		}
	}
})();