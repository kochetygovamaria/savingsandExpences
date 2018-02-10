var app = angular.module('myApp', angular.module('myApp',[
    'ngRoute', 'chart.js' ]));
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


    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
});
