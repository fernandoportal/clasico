'use strict';

/**
 * @ngdoc function
 * @name clasicoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clasicoApp
 */

app.controller('MainCtrl', function ($scope, $location, $route, $timeout) {


	//3 minutes reload - 180000
	$timeout(function () {
       $route.reload();
    }, 180000);

	var removeWidgetScript = function(){
		var twitterScriptEl = angular.element('#twitter-wjs');
   		twitterScriptEl.remove();
	};
	

    var loadWidgetScript = function(){
    	(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
    };

    $scope.goHome = function(){
    	$location.path("/");
    	console.log("home");
    };

    removeWidgetScript();
    loadWidgetScript();

	$scope.capWidgetLink = "https://twitter.com/search?q=%23Pe%C3%B1arol%20OR%20%23Manya%20OR%20%23Carbonero%20geocode%3A-34.829384%2C-56.308655%2C400km";
	$scope.capWidgetId = "597818007403024384";
	$scope.capWidgetTitle = "Peñarol";


	$scope.nacWidgetLink = "https://twitter.com/search?q=%23Nacional%20OR%20%23Bolso%20OR%20%23Tricolor%20geocode%3A-34.829384%2C-56.308655%2C400km";
	$scope.nacWidgetId = "597834392707473409";
	$scope.nacWidgetTitle = "Nacional";

});
