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

        var activities = JSON.parse(localStorage.getItem('activities')) || [];

        $scope.move = function (shus) {
            var even = _.find(activities, function (act) {
                return act.tureth == "ture"
            })

            if (even) {
            }
            else {
                //定义数组
                var naw = _.find(activities, function (act) {
                    return act.activity == localStorage.baoMing_name
                })


                if (naw) {
                    naw.bid_status = "true"
                    localStorage.setItem("activities", JSON.stringify(activities));
                }


                var shu = {"name": localStorage.baoMing_name, "shus": "shu", "messages": [], "color": "false", "push": "start"}
                var shus = JSON.parse(localStorage.getItem('shus')) || [];
                shus.unshift(shu);
                localStorage.setItem("shus", JSON.stringify(shus));
                var shus = JSON.parse(localStorage.getItem('shus')) || [];


                //点击开始按钮，竞价活动+1
                var shus = JSON.parse(localStorage.getItem('shus')) || [];
                var shu = _.filter(shus, function (shu) {
                    return shu.name == localStorage.baoMing_name
                })
//                console.log(shu)
                shus[0].shus = "竞价" + shu.length
                shus[0].color = "true"
                localStorage.setItem("shus", JSON.stringify(shus))
                localStorage.jingjia_name = shus[0].shus;
                $location.path('/Money_message')

            }

        }

        function dian() {
            var shus = JSON.parse(localStorage.getItem('shus')) || [];
            var e1 = _.find(activities, function (act) {
                return act.tureth == "true"
            })
            var w2 = _.find(shus, function (act) {
                return act.color == "true"
            })

            if (e1 || w2) {
                $scope.dian = true;

            }
            else {
                $scope.dian = false;
            }
        }
        dian()

        //取出点击的竞价名
        $scope.next = function (shus) {
            localStorage.jingjia_name = shus.shus
            var shu = JSON.parse(localStorage.getItem('shus')) || [];
            var action = _.find(shu, function (act) {
                return act.shus == localStorage.jingjia_name
            })
            if (action) {
                if (action.color == "false") {
                    $location.path('/result')
                }
                else {
                    $location.path('/Money_message')
                }
            }


        }
        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        $scope.list2 = _.filter(shus, function (shu) {
            return shu.name == localStorage.baoMing_name
        })//取出所有符合条件的值
        $scope.back = function () {
            $location.path('/list')
        }
    })