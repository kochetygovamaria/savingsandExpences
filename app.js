var app = angular.module('myApp', ['ngRoute']);
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'index.html',
          controller: 'myCtrl'
      }).
      otherwise({
          redirectTo: '/'
      });
}]);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.savings1="236";
    $scope.savings2="123";
    $scope.savings3="236";
    $scope.savings4="123";
    $scope.savingsDescription1="House";
    $scope.savingsDescription2="Trip to Argentina";
    $scope.savingsDescription3="Iphone 8Plus";
    $scope.savingsDescription4="New honda Civic";


    var randomScalingFactor = () => Math.round(Math.random() * 100);
  var randomColorFactor = () => Math.round(Math.random() * 255);
  var randomColor = opacity => 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '1') + ')';

  this.chart = {
    name: 'Chart',
    labels: ['Jan', 'Feb', 'Mar', 'May'],
    series: ['2014', '2015', '2016'],
    data: [
      [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    ],
    colors: [randomColor(), randomColor(), randomColor()],
    
    //this is where the magic doesn't happens
    options: {
      fill: false,
      datasetFill: false,
      lineTension : 0,
      pointRadius: 0
    }
  }
});