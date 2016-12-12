angular
  .module('demoApp')
  .directive('hcplot', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      scope: {
        options: '='
      },
      link: function ($scope, element) {
        $scope.$watch('options', function(newValue, oldValue) {
          Highcharts.chart(element[0], $scope.options);
        }, true)
      }
    }
  });