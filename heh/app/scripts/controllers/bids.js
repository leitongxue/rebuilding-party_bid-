'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('BidsCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.move = function () {
            jj_move($scope,$location)
        }
        $scope.click = click_start_button()

        //取出点击的竞价名
        $scope.next = function (bid) {
            find_jj_name(bid.bid, $location)
        }

        $scope.list2 = Bids.get_messages()

        //取出所有符合条件的值
        $scope.back = function () {
            $location.path('/list')
        }
    })