'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:Main OneCtrl
 * @description
 * # Main oneCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('Main_OneCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.show1 = false;

        $scope.inputstatus = function () {
            if (Activity.same_name($scope.change)) {
                $scope.show1 = true;
            }
            if (!Activity.same_name($scope.change)) {
                $scope.show1 = false;
            }
        }
        $scope.inputstatus()
        $scope.go_back = function () {
            $location.path('/list')
        }
        $scope.go_register = function () {
            jump()
            if ($scope.show1 == false) {
                $location.path('/creat');
                Activity.new_activity($scope.change)
            }
        }
        //          数组
        function jump() {
            if ($scope.show1 == false) {
                Activity.messages($scope.change)
            }
        }

        //返回按钮的显隐
        $scope.see = Activity.activity()

    }
)
