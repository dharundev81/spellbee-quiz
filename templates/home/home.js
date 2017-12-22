(function () {

var app = angular.module('Got');

var home= function($scope,$cordovaBarcodeScanner,apiFunc,$state,$rootScope,$route){

console.log(window.localStorage.getItem("user_id"));
console.log(window.localStorage.getItem("level"));
console.log(window.localStorage.getItem("score_card"));

if(window.localStorage.getItem("user_id")==null){
  $state.go('userget_Content.login');
}
 $scope.exit=function(){
ionic.Platform.exitApp();
        };


      $route.reload();

    $scope.$on('$ionicView.leave', function(){ //This just one when leaving, which happens when I logout
      $route.reload();
    });

     $scope.$on('$ionicView.enter', function(){ //This just one when leaving, which happens when I logout
      $route.reload();
    });

      $scope.$on('$ionicView.beforeEnter', function(){ //This just one when leaving, which happens when I logout
      $route.reload();
    });
$scope.new_question=function (current_level) {
  // body...
  console.log(current_level);
  $scope.current_level=current_level;
  $rootScope.current_level_state=current_level;
  var level_state=current_level;


    localStorage.setItem('question_level',level_state);

  console.log(localStorage.getItem('question_level'));


  $scope.quizz_questions();
}


$scope.leader=function(){
  
  $state.go('user.leaderboard');
} 

$scope.grade=function(){
  
  $state.go('user.grade');
} 

 


$scope.about=function(){
  
  $state.go('user.about');
}   
 $scope.$on('$ionicView.beforeEnter', function(){ //This is fired twice in a row
      // $route.reload();
      $scope.leaderboard();
      $scope.get_questions_set_count_quiz();

      // $scope.get_questions_for_user();
    });

//     $scope.get_questions_for_user=function(){
     
//   var obj ={
//      "spell_bee_id": window.localStorage.getItem("user_id"),
//   }

// console.log(obj);
//        apiFunc.get_questions_for_user(obj).then(function (data) {
//        console.log(data);
//        if(data.status==7400){
//        console.log(data.response);
//        }else{
//         console.log()
//   // MessageNotify(data.message)
//        }
//    },function (error) {
//        // body...
//    });
//     }



$scope.quizz_questions=function(){

 //  var post_data=
 //   {
 // "level":obj,
 //  }

        // $state.go('user.grade');

var obj ={
      "set_number":$scope.current_level,
     "level":window.localStorage.getItem("level"),
  }
  console.log(obj);
   apiFunc.get_questions_for_user(obj).then(function (data) {
       console.log(data);
       if(data.status==7400){
        $rootScope.questions=data.response;
        console.log($rootScope.questions);
        localStorage.setItem('questions',JSON.stringify(data.response));
        var new_val =localStorage.getItem('questions');
// localStorage.removeItem('score_card');

var new_value=0;
 localStorage.setItem('score_card',JSON.stringify(new_value));

        console.log(JSON.parse(new_val));
        $state.go('user.question');
        // $state.go('user.grade');

      // $route.reload();
       }else{
  MessageNotify(data.message)
       }
   },function (error) {
       // body...
   });
}


//     $scope.myNumber = 102;
// console.log($scope.myNumber);

//     // $scope.counter = Array; 
//      $scope.getNumber = function(num) {
//         return new Array(num);   
//     }

$scope.get_questions_set_count_quiz=function(){
   var obj ={
     "spell_bee_id": window.localStorage.getItem("user_id"),
  }
  console.log(obj)
   apiFunc.get_questions_set_count_quiz(obj).then(function (data) {
    console.log(data);
    if(data.status==7400){
 $scope.get_questions_set_count_data=data.response;
 $scope.total_count=data.response.total_set_count;
 $scope.current_set_count=data.response.current_set_count;

$scope.current_set = parseInt($scope.current_set_count);


    console.log($scope.get_questions_set_count_data);


$scope.myNumber = parseInt($scope.total_count);

console.log($scope.myNumber);
    // $scope.myNumber = 102;
    // $scope.counter = Array; 
     $scope.getNumber = function(num) {
        return new Array(num);   
    }


    }else{
       MessageNotify(data.message);
    }

   },function (error) {
       // body...
   });
}


$scope.home=function(){
  $state.go('user.grade');
  }

  $scope.exit=function(){
    //ionic.Platform.exitApp();
    $state.go('user_section.login');
    localStorage.clear();
  };

$scope.leaderboard=function(obj){
  var obj ={
     "level": window.localStorage.getItem("level"),
  }
  console.log(obj);
   apiFunc.leaderboard_list(obj).then(function (data) {
       console.log(data);
       if(data.status==7400){
      // $route.reload();
      $scope.leaderboard_data=data.response;
       }else{
  MessageNotify(data.message)
       }
   },function (error) {
       // body...
   });
}


 $scope.addontoggle = function(id){
  console.log(id);
       $(".addontoggle"+id).slideToggle(800);
        // $(".addtog"+id).addClass("dnone");
        // $(".addontoggle"+id).removeClass("dnone");
        console.log("icon toggle 1 ");
    }



console.log("123123");

};


app.controller("home",home);
}());