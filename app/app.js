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
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
            })
            .state('login', {
                url: '/login',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'auth/login.html',
            })
            .state('register', {
                url: '/register',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'auth/register.html',
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileCtrl as profileCtrl',
                templateUrl: 'users/profile.html',
            })
            .state('channels', {
                url: '/channels',
                controller: 'ChannelsCtrl as channelsCtrl',
                templateUrl: 'channels/index.html',
            })
            .state('channels.create', {
                url: '/create',
                templateUrl: 'channels/create.html',
                controller: 'ChannelsCtrl as channelsCtrl'
            })
            .state('channels.messages', {
                url: '/{channelId}/messages',
                templateUrl: 'channels/messages.html',
                controller: 'MessagesCtrl as messagesCtrl',
            })
            .state('channels.direct', {
                url: '/{uid}/messages/direct',
                templateUrl: 'channels/messages.html',
                controller: 'MessagesCtrl as messagesCtrl',
            });

        $urlRouterProvider.otherwise('/');
    })
    .constant('FirebaseUrl', 'https://amber-inferno-7309.firebaseio.com/');