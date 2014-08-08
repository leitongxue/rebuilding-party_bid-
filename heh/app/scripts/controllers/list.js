'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('ListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.list1 = JSON.parse(localStorage.getItem('activities'))


        $scope.go_next = function () {
            $location.path('main_one');
        }

        $scope.tiao = function (activity) {
            Activity.click_activity(activity.activity)
            $location.path('/creat')
        }

        function xuan() {
            if (Activity.activity_length()) {
                $location.path('/main_one');
            }
        }
        xuan()
    }
);
