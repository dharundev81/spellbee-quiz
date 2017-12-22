(function() {
    'use strict';

    angular.module('Got').controller('noNetworkCtrl', ['$scope', '$cordovaNetwork', '$state', '$ionicHistory','$ionicListDelegate', '$ionicBackdrop', '$ionicModal', '$ionicPopover', '$ionicPopup', '$ionicSlideBoxDelegate', '$ionicScrollDelegate', '$ionicNavBarDelegate', 'apiFunc', '$rootScope', '$stateParams', noNetworkCtrl]);

    function noNetworkCtrl($scope,$cordovaNetwork,$state,$ionicHistory, $ionicListDelegate, $ionicBackdrop, $ionicModal, $ionicPopover, $ionicPopup, $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicNavBarDelegate, apiFunc, $rootScope, $stateParams) {

        // $scope.offersList=[];
        $scope.$on('$ionicView.enter', function() {
        //$rootScope.cartList
            document.addEventListener('deviceready', function() {
                $scope.$on('$cordovaNetwork:online', function(event, networkState){
                  $ionicHistory.goBack(-1);
                });
            }, false);
        });

$scope.goOnline=function(){
    
if($cordovaNetwork.isOnline()){
$ionicHistory.goBack(-1);
}else{
    MessageNotify("No internet Connection");
}


}
    };


}());