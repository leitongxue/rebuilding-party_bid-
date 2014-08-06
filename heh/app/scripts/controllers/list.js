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
        $scope.list1 = JSON.parse(localStorage.getItem('activities')) || [];
        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        var even = _.find(shus, function (act) {
            return act.color == "true"
        })
        if (even) {
            $scope.dnf = true
        }
        else {
            $scope.dnf = false;
        }


        $scope.next = "创建活动";
        $scope.go_next = function () {
            $location.path('main_one');
        }

        $scope.tiao = function (activity) {
            localStorage.baoMing_name = activity.activity;
            $location.path('/creat')
        }


        function xuan() {
            var choose = JSON.parse(localStorage.getItem('activities')) || [];
            if (choose.length == 0) {
                $location.path('/main_one');
            }
            else {

            }
        }

        xuan()


    }
);
