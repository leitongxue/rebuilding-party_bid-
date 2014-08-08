'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('ResultCtrl', function ($scope, $location, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.back = function () {
            $location.path('/jingjia')
        }

        $scope.xianshi = function () {
            if (Bids.messages_bid()) {
                Bids.price_number()
                //创建一个‘价格——人数’数组
                //显示
                $scope.middle = Bids.bid_list()
                $scope.number = Bids.messages_bid().messages.length //显示参与竞价人数
                $scope.title = Bids.messages_bid().bid //显示竞价活动名

                if (Bids.messages_bid().messages.length == 0) {
                    $scope.winner_name = "0人"
                }
                if (Bids.messages_bid().messages.length != 0) {   //有人竞价
                    if(Find_price_of_one_people()) {
                        Bids.find_winner()
                        $scope.winner_name = Bids.find_winner().name
                        $scope.winner_phone = Bids.find_winner().phone + "  竞价成功！"
                        $scope.winner_price = "￥" + Bids.find_winner().price

                    //2秒弹框，只显示一次：赋一个值为“push”，默认为"start",在此情况下执行语句，并且修改“push”值为“end”，不再改回‘start’
                    Jump_window()
                    }
                    if(!Find_price_of_one_people()){
                        $scope.winner_name = "竞价失败！"
                        $scope.winner_phone = ""
                        $scope.winner_price = ""
                    }
                }
            }
        }
        $scope.xianshi()

    })