'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #Money_MessageCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('Money_MessageCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back = function () {
            $location.path('/jingjia')
        }

        $scope.diaoyong = function () {
            if (Bids.messages_bid()) {
                $scope.middle = Bids.messages_bid().messages
                $scope.number = Bids.messages_bid().messages.length
                $scope.title = Bids.messages_bid().bid
            }
        }
        $scope.diaoyong()

        //结束按钮
        Bids.use_bids()
        $scope.end = function () {
            Bids.use_bids()
            if (confirm("你确定要结束竞价吗？")) {
                Activity.save_bid_status_false()
                Bids.change_color()
                $location.path('/result')

            }
        }
    })