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

        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        var list2 = _.filter(shus, function (shu) {
            return shu.name == localStorage.baoMing_name
        })
        var name2 = localStorage.getItem('jingjia_name')

        $scope.xianshi = function () {
            var even = _.find(list2, function (act) {
                return act.shus == localStorage.jingjia_name
            })

            if (even) {
                //创建一个‘价格——人数’数组
                var bidList = _.sortBy(even.messages, function (bid) {
                    return bid.price
                });
                $scope.middle = bidList
                $scope.number = even.messages.length //显示参与竞价人数
                $scope.title = even.shus //显示竞价活动名
                var bidCount = _.countBy(even.messages, function (bid) {
                    return bid.price
                });
                var newshu = _.map(bidCount, function (value, key) {
                    return {'price': key, 'count': value}
                });
                localStorage.setItem("price_p", JSON.stringify(newshu))


                if (even.messages.length == 0) {
                    $scope.winner_name = "0人"
                }
                else {   //有人竞价
                    var list_price = JSON.parse(localStorage.getItem("price_p"))
                    var min = _.find(list_price, function (act) {
                        return act.count == 1
                    })//先找到最低符合要求的价格
                    if (min) {
                        var winner_action = _.find(list2, function (act) {
                            return act.shus == name2
                        }).messages //找到所在竞价活动的messages数组
//                            console.log(winner_action)
                        var winner = _.find(winner_action, function (act) {
                            return act.price == min.price
                        }) //找出最低价格
                        console.log(winner)
                        localStorage.setItem("winner", JSON.stringify(winner))
//                            console.log(winner.name)
                        $scope.winner_name = winner.name
                        $scope.winner_phone = winner.phone + "  竞价成功！"
                        $scope.winner_price = "￥" + winner.price
                        //2秒弹框，只显示一次：赋一个值为“push”，默认为"start",在此情况下执行语句，并且修改“push”值为“end”，不再改回‘start’
                        if (even.push == "start") {
                            $('#ModalSuccess').modal("show");
                            $timeout(function () {
                                $('#ModalSuccess').modal('hide');
                            }, 2000)
                            list2[0].push = "end"
                            localStorage.setItem("shus", JSON.stringify(list2))
                        }
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