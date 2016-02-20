angular.module('angularfireSlackApp')
    .controller('MessagesCtrl', function(channelName, Messages) {
        var messagesCtrl = this;

        messagesCtrl.messages = Messages;
        messagesCtrl.channelName = channelName;
        messagesCtrl.message = '';

        var profile = undefined;

        Auth.$requireAuth().then(function(auth){
            profile = Users.getProfile(auth.uid);
        });

        messagesCtrl.sendMessage = function() {
            if (messagesCtrl.message.length > 0) {
                messagesCtrl.messages.$add({
                    uid: profile.$id,
                    body: messagesCtrl.message,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                }).then(function() {
                    messagesCtrl.message = '';
                });
            }
        };
    });