angular.module('angularfireSlackApp')
    .controller('ChannelsCtrl', function($state, Auth, Users, Channels) {
        var channelsCtrl = this;

        Auth.$requireAuth().then(function(auth){
            channelsCtrl.profile = Users.getProfile(auth.uid);
            channelsCtrl.getDisplayName = Users.getDisplayName(auth.uid);
            channelsCtrl.getGravatar = Users.getGravatar(auth.uid);
            channelsCtrl.users = Users.all;

            Users.setOnline(profile.$id);
        });
        
        channelsCtrl.channels = Channels;

        channelsCtrl.logout = function() {
            channelsCtrl.profile.online = null;
            channelsCtrl.profile.$save().then(function() {
                Auth.$unauth();
                $state.go('home');
            });
        };

        channelsCtrl.newChannel = {
            name: ''
        };

        channelsCtrl.createChannel = function() {
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
                $state.go('channels.messages', {
                    channelId: ref.key()
                });
            });
        };
    });