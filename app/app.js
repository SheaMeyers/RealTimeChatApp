'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html',

        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireAuth().then(function (auth){
              $state.go('home');
            }, function (error){
              return;
            });
          }
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html',

        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireAuth().then(function (auth){
              $state.go('home');
            }, function (error){
              return;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://amber-inferno-7309.firebaseio.com/#');
