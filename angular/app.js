(function (){

	'use strict';

	angular.module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
	.config(
		function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, 
			jwtInterceptorProvider){

		authProvider.init({
			domain: 'lucanjos.auth0.com',
			clientID: 'QEBrNDOWQjA3y7eBG4ME0K6Rhl2M3mr_'
		});
		
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'components/home/home.tpl.html'
			})
			.state('profile',{
				url: '/profile',
				templateUrl: 'components/profile/profile.tpl.html'
			});

		jwtInterceptorProvider.tokenGetter = function(store){
			return store.get('token');
		}

		$httpProvider.interceptors.push('jwtInterceptor');

	});
})();