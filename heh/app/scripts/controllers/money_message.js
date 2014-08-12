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
            $location.path('/bids')
        }

        $scope.refresh=function() {
            if (Bids.messages_bid()) {
                $scope.middle = Bids.messages_bid().messages
                $scope.number = Bids.messages_bid().messages.length
                $scope.title = Bids.messages_bid().bid
            }
        }
        $scope.refresh()


        //结束按钮
        Bids.use_bids()
        $scope.end = function () {
            Bids.use_bids()
            jj_end_window($location)
        }
    })