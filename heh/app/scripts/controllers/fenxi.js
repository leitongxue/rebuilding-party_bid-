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


        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        var list2 = _.filter(shus, function (shu) {
            return shu.name == localStorage.baoMing_name
        })

        $scope.xianshi = function () {

            var even = _.find(list2, function (act) {
                return act.shus == localStorage.jingjia_name
            })

            if (even) {
                $scope.title = even.shus
                $scope.number = even.messages.length
                var newshu = JSON.parse(localStorage.getItem("price_p"))
                $scope.middle = newshu


                if (even.messages.length == 0) {
                    $scope.winner_name = "0人"
                }
                else {
                    var list_price = JSON.parse(localStorage.getItem("price_p"))
                    var win = _.find(list_price, function (act) {
                        return act.count == 1
                    })
                    if (win) {
                        var winner = JSON.parse(localStorage.getItem("winner"))
                        $scope.winner_name = winner.name
                        $scope.winner_phone = winner.phone + "  竞价成功！"
                        $scope.winner_price = "￥" + winner.price
                    }
                    else {
                        $scope.winner_name = "竞价失败！"
                        $scope.winner_phone = ""
                        $scope.winner_price = ""
                    }

                }

            }

        }
        $scope.xianshi()


    })
