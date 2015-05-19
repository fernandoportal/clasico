'use strict';

/**
 * @name menu
 *
 */
app.directive('menu', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/menu.html',
        controller: function($scope, $location){

            $scope.menuOptions = [
                {name: 'Clásico',selected: true, link:'/'},
                {name: 'Cómo funciona',selected: false, link:'/about'}
            ];

            $scope.goHome = function(){
                $location.path('/');
            };

            $scope.goToOption = function(option){
                clearOptions();
                option.selected = true;
                $location.path(option.link);
            };

            var clearOptions = function(){
                angular.forEach($scope.menuOptions, function(key) {
                    key.selected = false;
                });
            };
        }
    };
});