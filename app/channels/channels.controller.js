angular.module('angularfireSlackApp')
	.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
		var channelsCtrl = this;

		channelsCtrl.profile = profile;
		channelsCtrl.channels = channels;
		channelsCtrl.getDisplayName = Users.getDisplayName;
		channelsCtrl.getGravatar = Users.getGravatar;
		channelsCtrl.users = Users.all;

		channelsCtrl.logout = function(){
			Auth.$unauth();
			$state.go('home');
		};

		channelsCtrl.createChannel = function(){
			channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(){
				channelsCtrl.newChannel = {
					name: ''
				};
			});
		};
	});