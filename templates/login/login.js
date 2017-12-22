(function () {
    var app = angular.module('Got');
    var loginctrl = function ($scope,$state,apiFunc,$ionicHistory,$ionicLoading) {

 console.log('asd');


if(window.localStorage.getItem("user_id")!=null || window.localStorage.getItem("level")!=null || window.localStorage.getItem("score")!=null){
  $state.go('user.grade');
}

console.log(window.localStorage.getItem("user_id"));
console.log(window.localStorage.getItem("level"));
console.log(window.localStorage.getItem("score_card"));

        // $ionicHistory.clearCache();

        // $ionicHistory.clearHistory();

        //localStorage.clear();

//   var user_id=window.localStorage.getItem("user_id");
// console.log(user_id);
//  if(user_id!='undefined' && user_id!=null && user_id!='' && user_id!=undefined)
//            {
//             console.log('login controller');
//                 if(window.localStorage.getItem('introScreen')=='undefined' || window.localStorage.getItem('introScreen')==null || window.localStorage.getItem('introScreen')=='' || window.localStorage.getItem('introScreen')==undefined){
//       window.localStorage.setItem('introScreen','1');
//       // $state.go('user.slider');
// }else{
//              $state.go('user.home');
//              }
//            }else{
//            }


 


$scope.login=function(spell_bee_id){

  console.log(spell_bee_id);


var data= {
  "spell_bee_id":spell_bee_id,
  "type":'quiz'
};

console.log(data);

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
             $state.go('user.grade');
                    }else{
                      console.log(result);
                  $ionicLoading.hide();
                      MessageNotify(result.message);
                    }
                  },
                  function(err){
                      console.log(err);
                  }
                  );
                        
                       
              

            }


 $scope.exit=function(){ 
    // window.localStorage.removeItem('user_id');
    //                   window.localStorage.removeItem('userDetails');
ionic.Platform.exitApp();
        };


    };
    app.controller("loginctrl", loginctrl);
}());