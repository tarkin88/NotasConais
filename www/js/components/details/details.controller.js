(function (){
	'use strict';
	angular
		.module('app')
		.controller('DetailsController', DetailsController);

	function DetailsController($log, $stateParams, localStorageService, $filter){
		/* data */
		var vm = this;
		vm.nota = ($filter('filter')(localStorageService.get('notas'), {id: $stateParams.id}, true))[0];
		 /* methods*/


		 /* functions */

	}
})();