(function (){
	'use strict';
	angular
		.module('app')
		.controller('LoginController', LoginController);

	function LoginController ($log, $state, $ionicPopup){
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
			var user= 'frank', pass= '1234';

			if(form.user ===  user){
				if(form.password === pass){
					$state.go('home');
				}else{
					alert('Contraseña incorrecta');
				}
			}else{
				alert('Usuario incorrecto');
			}
		}

		function alert(text){
			$ionicPopup.alert({
     				title: 'Atención',
				    template: '<p style="text-align: center;">' + text + '</h3>'
   			});
		}
	}
})();