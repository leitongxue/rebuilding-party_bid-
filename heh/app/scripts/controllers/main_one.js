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
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            var even = _.find(activities, function (act) {
                return act.activity == $scope.change
            })
            if (even) {
                $scope.show1 = true;
            }
            else {
                $scope.show1 = false;
            }
        }

        $scope.back = "返回";
        $scope.go_back = function () {
            $location.path('/list')
        }

        $scope.register = "创建";
        $scope.go_register = function () {
            jump()
            if ($scope.show1 == false) {
                $location.path('/creat');
                localStorage.baoMing_name = $scope.change
            }

        }


        //          数组
        function jump() {
            if ($scope.show1 == false) {

                var activity = {"activity": $scope.change, "messages": [], "tureth": "false", "bid_status": "false"}

                var activities = JSON.parse(localStorage.getItem('activities')) || [];

                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities));

            }
        }

        //返回按钮的显隐
        $scope.see = localStorage.getItem('activities');

    }
)
