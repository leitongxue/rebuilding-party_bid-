'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('JingjiaCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.move = function (shus) {
            if (Bids.start_disabled_activity()) {
                $scope.dian = true
            }
            else {
                if (Activity.change_doing_activity()) {
                    Activity.save_bid_status_ture();
                }
                Bids.save_bid_name()
                $location.path('/Money_message')
            }
        }

        function dian() {
            if (Bids.start_disabled_activity() || Bids.start_disabled_bid()) {
                $scope.dian = true;
            }
            if (!(Bids.start_disabled_activity() || Bids.start_disabled_bid())) {
                $scope.dian = false;
            }
        }

        dian()

        //取出点击的竞价名
        $scope.next = function (bid) {
            if (Bids.get_seeing_bid_name(bid)) {
                $location.path('/result')
            }
            if (!Bids.get_seeing_bid_name(bid)) {
                $location.path('/Money_message')
            }
        }


        $scope.list2 = Bids.get_messages()

        //取出所有符合条件的值
        $scope.back = function () {
            $location.path('/list')
        }
    })