(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-profile', ['megazord'])
    .controller('sgb-screen-profile-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', function ($scope, _router, _screen, _screenParams, _data) {
        _screen.initialize($scope, _screenParams);
        $scope.selectedIcon = "";
        $scope.icons = _screenParams.icons;
        $scope.iconsoption = _screenParams.iconsoption;
        $scope.picoption = _screenParams.picoption;

        $scope.changeIcon = function (icon) {
          $scope.selectedIcon = icon;
        }

    }]);

},{}]},{},[1]);
