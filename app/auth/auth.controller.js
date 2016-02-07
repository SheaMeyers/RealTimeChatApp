angular.module('angularfireSlackApp')
    .controller('AuthCtrl', function(Auth, $state) {
        var authCtrl = this;

        authCtrl.user = {
            email: '',
            password: ''
        };

        authCtrl.login = function() {
            Auth.$authWithPassword(authCtrl.user).then(function(auth) {
                $state.go('channels');
            }, function(error) {
                authCtrl.error = error;
                console.log('login ' + error);
            });
        };

        authCtrl.register = function() {
            Auth.$createUser(authCtrl.user).then(function(user) {
                authCtrl.login();
            }, function(error) {
                authCtrl.error = error;
                console.log('register ' + error);
            });
        };
    });