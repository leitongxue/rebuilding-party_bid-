'use strict';

/**
 * @ngdoc overview
 * @name myYoProjectApp
 * @description
 * # myYoProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myYoProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main_one', {
        templateUrl: 'views/main_one.html',
        controller: 'Main_OneCtrl'
      })
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/creat', {
        templateUrl: 'views/creat.html',
        controller: 'CreatCtrl'
      })
      .when('/jingjia', {
        templateUrl: 'views/jingjia.html',
        controller: 'JingjiaCtrl'
      })
      .when('/Money_message', {
        templateUrl: 'views/Money_message.html',
        controller: 'Money_MessageCtrl'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
        })
      .when('/fenxi', {
        templateUrl: 'views/fenxi.html',
        controller: 'FenxiCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
