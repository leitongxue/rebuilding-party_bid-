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
            var shus = JSON.parse(localStorage.getItem('shus')) || [];
            var activity = _.filter(shus, function (shu) {
                return shu.name == localStorage.baoMing_name
            })
            var activity_ing = _.find(activity, function (act) {
                return act.shus == localStorage.jingjia_name
            })
            if (activity_ing) {

                $scope.middle = activity_ing.messages
                $scope.number = activity_ing.messages.length
                $scope.title = activity_ing.shus
            }
        }
        $scope.diaoyong()


        //结束按钮
        var shus = JSON.parse(localStorage.getItem('shus')) || [];//先提取出空数组，进行压栈

        $scope.end = function () {
            var shus = JSON.parse(localStorage.getItem('shus')) || [];//在取出压栈好的，结束，这样点结束按钮后数组不会为空
            if (confirm("你确定要结束竞价吗？")) {
                var activities = JSON.parse(localStorage.getItem('activities')) || [];
                var ev = _.find(activities, function (act) {
                    return act.activity == localStorage.baoMing_name
                     })
                console.log(ev)
                if (ev.bid_status=="true") {
                    ev.bid_status = "false"
                    localStorage.setItem("activities", JSON.stringify(activities));
                    $location.path('/result')
                }

                if (shus[0].color == "true") {
                    shus[0].color = "false"
                    localStorage.setItem("shus", JSON.stringify(shus))
//                    $scope.xian = true
                }
            }
        }
    })