angular.module('angularfireSlackApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		var auth = new $firebaseAuth(ref);

		return auth;
	});
	