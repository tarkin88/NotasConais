(function (){
	'use strict';
	angular
		.module('app')
		.controller('LoginController', LoginController);

	function LoginController ($log, $state, $ionicLoading, localStorageService){
		/* Data */
		var vm = this;

		/* Methods */
		vm.login =  login;
		vm.alert =  alert;

		/* Functions */

		function login(form){
			/***Simple auth
			*	@param: user
			*	@param: password
			**/
			if(localStorageService.get('user')){
				var user= localStorageService.get('user').username;
				var pass= localStorageService.get('user').password;

				if(form.user ===  user){
					if(form.password === pass){
						$state.go('home');
						alert('Bienvenido ' + user);
					}else{
						alert('Contraseña incorrecta');
					}
				}else{
					alert('Usuario incorrecto');
				}
			}else{
				alert('No existe ningun usuario. ');
			}

		}

		function alert(text){
			$ionicLoading.show({ template: text, noBackdrop: true, duration: 2000 });
		}
	}
})();