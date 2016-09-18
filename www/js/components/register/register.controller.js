(function (){
	'use strict';
	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	function RegisterController(localStorageService, $log, $ionicLoading, $state){
		/* Data */
		var vm = this;
		/* Methods */
		vm.registerUser = registerUser;

		/* Functions */
		function registerUser (form){
			if(form.password === form.passwordConfirm){
				$ionicLoading.show({noBackdrop: true});
				localStorageService.set('user', {
					username: form.user,
					password: form.password
				});
				$ionicLoading.hide();
				$ionicLoading.show({ template: 'Usuario Creado', noBackdrop: true, duration: 3000 });
				$state.go('login');
			}else{
				$ionicLoading.show({ template: 'Las contraseñas no coinciden', noBackdrop: true, duration: 3000 });
			}

		}

	}
})();