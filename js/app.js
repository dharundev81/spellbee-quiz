// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('Got', ['ionic', 'Got.controllers','ngRoute','ngCordova'])

.run(function($ionicPlatform,$rootScope,$ionicHistory,$state,$cordovaNetwork,apiFunc,$ionicLoading,$ionicHistory,$window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });




  document.addEventListener("deviceready", function () {
  // setTimeout(function() {
  //   $cordovaSplashscreen.hide();
  // }, 2000);
  

  var type = $cordovaNetwork.getNetwork()

    var isOnline = $cordovaNetwork.isOnline()

    var isOffline = $cordovaNetwork.isOffline()


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      $state.go('user.networkerror');
    })


  $ionicPlatform.registerBackButtonAction(function () {
        if ($state.current.name == 'userget_Content.login' || $state.current.name == 'user.home') {
            // do something for this state
          MessageNotify("Press back button again to exit");
        ionic.Platform.exitApp();
        }else if ($state.current.name == 'user.grade') {
      $state.go('user.home');
            // navigator.app.backHistory();
        } else {
            navigator.app.backHistory();
        }
    }, 100);
        
    //  $ionicPlatform.registerBackButtonAction(function(e){
    //   if ($rootScope.backButtonPressedOnceToExit) {
    //   //MessageNotify('kalai1');
    //     ionic.Platform.exitApp();
    //   }else if($ionicHistory.backView() && $state.current.name!='user_section.login') {
    //   //MessageNotify('kalai2');
    //     $ionicHistory.goBack();
    //   }else {
    //     if($state.current.name=='user_section.login'){
    //       $rootScope.backButtonPressedOnceToExit = true;
    //       MessageNotify("Press back button again to exit");
    //       //MessageNotify("Press back button again to exit");
    //       setTimeout(function(){
    //         $rootScope.backButtonPressedOnceToExit = false;
    //       },2000);
    //     }else if($state.current.name!='user.home'){
    //       $state.go('user.home');
    //     }else{
    //       $rootScope.backButtonPressedOnceToExit = true;
    //       MessageNotify("Press back button again to exit");
    //       //MessageNotify("Press back button again to exit");
    //       setTimeout(function(){
    //         $rootScope.backButtonPressedOnceToExit = false;
    //       },2000);
    //     }
    //   }
    //   e.preventDefault();
    //   return false;
    // },101);

// alert('1');
 
function user_check(){
       

    var data= {
  "spell_bee_id":window.localStorage.getItem("user_id"),
  "type":'quiz'
};

// alert(JSON.stringify(data));

 $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});
                  apiFunc.login(data).then(function(result){
                console.log(result);
                 var response=result.response;
                    console.log(response);
                    if(result.status==7400){
                  $ionicLoading.hide();
                        window.localStorage.setItem('user_id',response.spell_bee_id);
                        window.localStorage.setItem('userDetails',JSON.stringify(response));
                        window.localStorage.setItem('level',response.level);
                        window.localStorage.setItem('score_card',response.quizz_score);
             $state.go('user.home');
                    }else{
                    // alert(JSON.stringify(result));
                       $window.localStorage.clear();
              $ionicHistory.clearCache();
                  $ionicHistory.clearHistory();
              $state.go('userget_Content.login'); 
                    }
                  },
                  function(err){
                    alert(err);
                  }
                  );
}

user_check();

// alert('2');





});

})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('user', {
      url: '/user',
      abstract: true,
     cache:false, 
      templateUrl: 'templates/login_user.html',
  })

     .state('userget_Content', {
      url: '/userget_Content',
      abstract: true,
     cache:false, 
      templateUrl: 'templates/login_user1.html',
  })


  .state('user.home', {
    url: '/home',
    views: {
      'userContent': {
        templateUrl: 'templates/home/home.html'
      }
    }
  })

  .state('user.leaderboard', {
    url: '/leaderboard',
    views: {
      'userContent': {
        templateUrl: 'templates/home/leaderboard.html'
      }
    }
  })

   .state('user.grade', {
    url: '/grade',
    views: {
      'userContent': {
        templateUrl: 'templates/home/grade.html'
      }
    }
  })

   .state('user.about', {
    url: '/about',
    views: {
      'userContent': {
        templateUrl: 'templates/home/about.html'
      }
    }
  })


.state('userget_Content.login', {
    url: '/login',
    views: {
      'userget_Content': {
        templateUrl: 'templates/login/login.html'
      }
    }
  })

   .state('user.question', {
    url: '/question',
    views: {
      'userContent': {
        templateUrl: 'templates/question/question.html'
      }
    }
  })

 .state('user.networkerror', {
    url: '/networkerror',
    views: {
      'userContent': {
        templateUrl: 'templates/networkerror/nonetwork.html'
      }
    }
  })


  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/userget_Content/login');
});
