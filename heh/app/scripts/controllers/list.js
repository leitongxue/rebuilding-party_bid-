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
        $scope.list1 = Activity.activity()
        console.log(Activity.activity ())
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
