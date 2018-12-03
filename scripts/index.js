var app = angular.module('buddha99', ['ngRoute', 'ui.bootstrap', 'ngResource', 'appFilters']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: "mainCtrl",
        templateUrl: "views/main.html"
    });
});

app.controller('mainCtrl', function($scope, $http, $resource, getLinksFactory){
  getLinksFactory.getLinks().success(function(data){
      $scope.navlinks = data;
  });
});
    
app.factory('getLinksFactory', function($http){
    var factory = {};
    factory.getLinks = function(){
        return $http.get("data/navlinks.json");
    };
    return factory;
});