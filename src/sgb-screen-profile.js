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
