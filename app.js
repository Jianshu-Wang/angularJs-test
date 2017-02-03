(function(){
  'use strict';

  angular.module('MyFirstApp',[])

  .controller('MyFirstController',function($scope){

    $scope.name = "Jack Wang";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    };

  });

})();
