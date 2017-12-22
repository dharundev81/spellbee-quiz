(function() {
    'use strict';

    angular.module('Got').factory('apiFunc', ['$http', '$q',  '$ionicLoading', '$rootScope', apiFunc]);

    function apiFunc($http, $q, $ionicLoading, $rootScope) {
           
function get_questions(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/get_questions_level_quizz',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}


function login(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/login',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}


function update_score(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/update_score_quiz',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}

function get_questions_for_user(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/get_questions_for_user_quizz',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}


function leaderboard_list(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/leaderboard_list_quiz',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}
function get_questions_set_count_quiz(element){   

        var deferred = $q.defer();
        $ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'});

        $http({ 
    method: 'POST',
    url: base_url + 'apicall/get_questions_set_count_quiz',
    data: element,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).success(function(data) {
        $ionicLoading.hide();
                    deferred.resolve(data);
                }).error(function() {
                MessageNotify('Server Error Please try after sometime .');
        $ionicLoading.hide();
        deferred.reject();

                });
            return deferred.promise;
}



        return {
            get_questions: get_questions,
            login:login,
            update_score:update_score,
            get_questions_for_user:get_questions_for_user,
            leaderboard_list:leaderboard_list,
            get_questions_set_count_quiz:get_questions_set_count_quiz
        };
    };

  

})();

