'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #CreatCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('CreatCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.backing = "返回";
        $scope.go_backing = function () {
            $location.path('/list')
        }
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        var even = _.find(activities, function (act) {
            return act.activity == localStorage.baoMing_name
        })
//选择显示；页面刷新
        $scope.diaoyong = function () {
            if (even) {

                $scope.middle = even.messages
                $scope.number = even.messages.length
            }
        }
        $scope.diaoyong()


//控制当一个活动开始报名后，此活动显示结束按钮，其余活动显示开始按钮
        $scope.log = "true";
        if (even) {
            if (even.tureth == "true") {
                $scope.log = "false"
            }
        }

//开始按钮
        $scope.hh = function () {
            $scope.log = "false";
            var tureth = {"log": "log"}
            if (even) {
                even.tureth = "true";
                localStorage.setItem("activities", JSON.stringify(activities));
            }
        }


//结束按钮
        $scope.HH = function firm() {
            if (confirm("你确定要退出报名吗？")) {
                $scope.log = "true"
                var tureth = {"log": "log"}
                if (even) {

                    even.tureth = "false";
                    localStorage.setItem("activities", JSON.stringify(activities));
                }
                $location.path('/jingjia')
            }

            return;//处理有活动接受到报名信息后点击结束按钮，开始按钮显示但不可点问题
        }


//开始按钮的显隐，当tureth数组中有一个true，按钮不可点
        function start_change() {
            var v1 = _.find(activities, function (act) {
                return act.tureth == "true"
            })
            var v2 = _.find(activities, function (act) {
                return act.bid_status == "true"
            })
            //bid_status是竞价开始时赋值到报名列表里的控制黄色底色的

            if (v1 || v2) {
                $scope.start_change = true;
            }
            else {
                $scope.start_change = false;
            }
        }

        start_change();
    });

