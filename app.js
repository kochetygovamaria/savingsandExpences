var app = angular.module('myApp', ["chart.js"]);
app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }])


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
    name: 'Saving',
    labels: ['Jan', 'Feb', 'Mar', 'May'],
    
    data: [
      [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
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

app.controller("DoughnutCtrl", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
  });


              