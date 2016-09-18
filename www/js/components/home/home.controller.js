(function (){
	'use strict';
	angular
		.module('app')
		.controller('HomeController', HomeController);

	function HomeController($log, StorageService, $ionicModal){
		/* data */
		var vm = this;
		vm.notas = StorageService.getAll();

		/* methods */
		vm.viewDetail = viewDetail;
		vm.addNote = addNote;
		vm.modal = modal;
		vm.closeModal = closeModal;
		 vm.addNewNote= addNewNote;

		function viewDetail (note){
			$log.log(note);
		}

		function addNote(){
			$log.log('aqui voy');
			modal();
		}
		function modal(){
			$ionicModal.fromTemplateUrl('js/components/home/modals/home.modal.html', {
			    animation: 'slide-in-up'
			  }).then(function(modal) {
			    vm.modal= modal;
			    vm.modal.show();
			  });
		}
		function closeModal(){
			vm.modal.remove();
		}

		function addNewNote (form){
			$log.log('asdadsadsad');
			form.fecha = new Date();
		 	StorageService.add(form);
		}
	}
})();