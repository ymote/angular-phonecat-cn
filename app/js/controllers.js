'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    //修改以下代码使得只显示手机列表的前五个
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});
