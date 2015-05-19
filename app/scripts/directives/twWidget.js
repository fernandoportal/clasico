app.directive('twWidget', function() {

  return {
    restrict: 'E',
    scope: {
      link: '@',
      id: '@',
      title: '@'
    },
    templateUrl: 'views/directives/search-widget.html'
  };
});