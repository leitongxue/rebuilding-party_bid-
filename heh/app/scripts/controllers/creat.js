'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #CreatCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('CreatCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.go_backing = function () {
            $location.path('/list')
        }
        $scope.refresh = function () {
            if (Activity.change_doing_activity()) {
                $scope.middle = Activity.change_doing_activity().messages
                $scope.number = Activity.change_doing_activity().messages.length
            }
        }
        $scope.refresh()

        Creat.choose_button($scope)

        $scope.start = function() {
            Creat.start_button($scope)
        }
        $scope.end = function() {
            Creat.end_button($scope,$location)
        }
        function start_change() {
            Creat.start_disabled($scope)
        }
        start_change();
    });

