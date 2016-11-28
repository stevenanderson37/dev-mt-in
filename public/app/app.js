var app = angular.module("app", ['ui.router']);

// CONFIG
// ============================================================
angular.module("app")
	.config(function($stateProvider, $urlRouterProvider) {

    // INITIALIZE STATES
		// ============================================================
		$stateProvider

    // ENTRY VIEW STATE
    .state('entry', {
      url: "/entry",
      templateUrl: "./app/routes/entryView/entryTmpl.html",
      controller: "entryCtrl"
    })

    // LANDING PAGE STATE
    .state('user_profile', {
      url: "/user_profile",
      templateUrl: "./app/routes/userProfile/userProfileTmpl.html",
      controller: "userProfileCtrl"
    })

    // UPDATE PROFILE STATE
    .state('update_profile', {
      url: "/update_profile",
      templateUrl: "./app/routes/updateProfile/updateProfileTmpl.html",
      controller: "updateProfileCtrl"
    })

    // FRIENDS VIEW STATE
    .state('friends', {
      url: "/friends",
      templateUrl: "./app/routes/viewFriends/viewFriendsTmpl.html",
      controller: "viewFriendsCtrl"
    })

		// FRIEND PROFILE VIEW STATE
    .state('friend_profile', {
      url: "/friend_profile",
      templateUrl: "./app/routes/friendProfile/friendProfileTmpl.html",
      controller: "friendProfileCtrl"
    })

    // FIND FRIENDS VIEW STATE
    .state('find_friends', {
      url: "/find_friends",
      templateUrl: "./app/routes/findFriends/findFriendsTmpl.html",
      controller: "findFriendsCtrl"
    });

    // ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('entry');
	});
