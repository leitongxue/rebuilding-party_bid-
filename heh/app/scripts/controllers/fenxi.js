'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('FenxiCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back = function () {
            $location.path('/jingjia')
        }

        Bids.get_messages()

        $scope.xianshi = function () {
            Bids.messages_bid()
            console.log(Bids.messages_bid())
            if (Bids.messages_bid()) {
                console.log(1)
                $scope.title = Bids.messages_bid().bid
                $scope.number = Bids.messages_bid().messages.length
                $scope.middle = Bids.price_number()

                if (Bids.messages_bid().messages.length == 0) {
                    $scope.winner_name = "0人"
                }
                if (Bids.messages_bid().messages.length != 0) {
                    if(!Find_price_of_one_people()){
                        $scope.winner_name = "竞价失败！"
                        $scope.winner_phone = ""
                        $scope.winner_price = ""
                    }
                    if (Find_price_of_one_people()) {
                        Bids.find_winner()
                        $scope.winner_name = Bids.find_winner().name
                        $scope.winner_phone = Bids.find_winner().phone + "  竞价成功！"
                        $scope.winner_price = "￥" + Bids.find_winner().price
                    }
                }
            }
        }
        $scope.xianshi()


    })
