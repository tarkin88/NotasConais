(function (){
	'use strict';
	angular
		.module('app')
		.controller('NewNoteController', NewNoteController);

	function NewNoteController ($log, localStorageService, $ionicLoading, $state){
		/* data */
		var vm = this;
		vm.array = [];

		/*methods*/
		vm.NewNote = NewNote;

		/*functions*/
		function NewNote (form){
			form.fecha = new Date();
			form.id = uniqueId();
			if(localStorageService.get('notas')){
				vm.array = localStorageService.get('notas');
				vm.array.push(form);
			}else{
				vm.array.push(form);
			}
		 	localStorageService.set('notas', vm.array);
		 	$ionicLoading.show({template: '<b>Creada</b>', duration:800});
		 	$state.go('home');
		}

		function uniqueId() {
		  // Math.random should be unique because of its seeding algorithm.
		  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
		  // after the decimal.
		  return '_' + Math.random().toString(36).substr(2, 9);
		}
	}
})();