angular.module('angularfireSlackApp')
    .controller('ProfileCtrl', function($state, md5, Auth, Users) {
        var profileCtrl = this;

        Auth.$requireAuth().then(function(auth){
            profileCtrl.profile = Users.getProfile(auth.uid);
        });

        profileCtrl.updateProfile = function() {
            Auth.$requireAuth().then(function(auth) {
                profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
                profileCtrl.profile.$save().then(function() {
                    $state.go('channels');
                });
            });
        };
    });