angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  // INITIALIZE STATES
	// ============================================================
	$stateProvider

  // ENTRY VIEW STATE
  .state('entry', {
    url: "/entry",
    templateUrl: "./../public/app/routes/entryView/entryTmpl.html",
    controller: "entryCtrl"
  })

  // LANDING PAGE STATE
  .state('user_profile', {
    url: "/user_profile",
    templateUrl: "./../public/app/routes/userProfile/userProfileTmpl.html",
    controller: "userProfileCtrl"
  })

  // UPDATE PROFILE STATE
  .state('update_profile', {
    url: "/update_profile",
    templateUrl: "./../public/app/routes/updateProfile/updateProfileTmpl.html",
    controller: "updateProfileCtrl"
  })

  // FRIENDS VIEW STATE
  .state('friends', {
    url: "/friends",
    templateUrl: "./../public/app/routes/viewFriends/viewFriendsTmpl.html",
    controller: "viewFriendsCtrl"
  })

	// FRIEND PROFILE VIEW STATE
  .state('friend_profile', {
    url: "/friend_profile",
    templateUrl: "./../public/app/routes/friendProfile/friendProfileTmpl.html",
    controller: "friendProfileCtrl"
  })

  // FIND FRIENDS VIEW STATE
  .state('find_friends', {
    url: "/find_friends",
    templateUrl: "./../public/app/routes/findFriends/findFriendsTmpl.html",
    controller: "findFriendsCtrl"
  });

  // ASSIGN OTHERWISE
	// ============================================================
	$urlRouterProvider.otherwise('entry');
});
