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
        var a =JSON.parse(localStorage.getItem('activities'))
console.log(a[0].bid_status)

//        if (Bids.start_disabled_activity()) {
//            $scope.dnf = true
//        }
//        if (!Bids.start_disabled_activity()){
//            $scope.dnf = false;
//        }



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
