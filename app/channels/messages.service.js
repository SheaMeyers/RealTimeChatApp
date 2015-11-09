angular.module('angularfireSlackApp')
    .factory('Messages', function($firebaseArray, FirebaseUrl) {
        var channelMessagesRef = new Firebase(FirebaseUrl + 'channelMessages');
        var usersRef = new Firebase(FirebaseUrl + 'users');
        var connectedRef = new Firebase(FirebaseUrl + '.info/connected');

        return {
            forChannel: function(channelId) {
                return $firebaseArray(channelMessagesRef.child(channelId));
            },
            forUsers: function(uid1, uid2) {
                var path = uid1 < uid2 ? uid1 + '/' + uid2 : uid2 + '/' + uid1;

                return $firebaseArray(userMessagesRef.child(path));
            }
        };
    });