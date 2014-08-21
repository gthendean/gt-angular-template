'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
            // dummy to avoid jshint defined but not ued
            attrs.dummy = 'dummy';
        };
    }]);
