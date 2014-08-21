'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function($scope) {
        $scope.ctrl1 = 'dummy value ctrl1';
    }])
    .controller('MyCtrl2', ['$scope', function($scope) {
        $scope.ctrl2 = 'dummy value ctrl2';
    }]);
