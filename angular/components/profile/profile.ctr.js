(function(){

	'use strict';

	angular.module('authApp')
		.controller('profileController', profileController);


	function profileController($http){
		var vm = this;
		vm.getPublicQuote = getPublicQuote;
		vm.getSecretQuote = getSecretQuote;
		vm.message;

		vm.profile = JSON.parse(localstorage.getItem('profile'));

		function getPublicQuote(){
			$http.get('http://localhost:1337/api/random-quote',{
				skipAuthorization: true
			}).then(function(response){
				vm.message = response.data.quote;
			});
		}

		function getSecretQuote(){
			$http.get('http://localhost:1337/api/protected/random-quote')
				.then(function(response){
					vm.message = response.data.quote;
			});
		}
	}

})();