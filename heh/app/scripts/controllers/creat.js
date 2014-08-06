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


        $scope.go_backing = function () {
            $location.path('/list')
        }

//选择显示；页面刷新
        $scope.diaoyong = function () {
            if (Activity.change_doing_activity()) {
                $scope.middle = Activity.change_doing_activity().messages
                $scope.number = Activity.change_doing_activity().messages.length
            }
        }
        $scope.diaoyong()
//控制当一个活动开始报名后，此活动显示结束按钮，其余活动显示开始按钮
        $scope.log = "true";
        if (Activity.change_doing_activity()) {
            if (Activity.change_doing_activity().tureth == "true") {
                $scope.log = "false"
            }
        }
//开始按钮
        $scope.hh = function () {
            $scope.log = "false";
            var tureth = {"log": "log"}
            if (Activity.change_doing_activity()) {
                Activity.save_messages_start()
            }
        }
//结束按钮
        $scope.HH = function firm() {
            if (confirm("你确定要退出报名吗？")) {
                $scope.log = "true"
                var tureth = {"log": "log"}
                if (Activity.change_doing_activity()) {
                    Activity.save_messages_end()
                }
                $location.path('/jingjia')
            }

            return;//处理有活动接受到报名信息后点击结束按钮，开始按钮显示但不可点问题
        }


//开始按钮的显隐，当tureth数组中有一个true，按钮不可点
        function start_change() {
            //bid_status是竞价开始时赋值到报名列表里的控制黄色底色的
            if (Activity.creat_action_disabled()) {
                $scope.start_change = true;
            }
            else {
                $scope.start_change = false;
            }
        }

        start_change();
    });

