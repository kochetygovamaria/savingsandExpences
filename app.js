var app = angular.module('myApp', []);
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
});