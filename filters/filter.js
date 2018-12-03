angular.module("appFilters", []).filter("hyperlinks", function($sce){
    return function(input){
        for(var i in input){
            return $sce.trustAsHtml('<a href="' + input[i] +'">' + i + '</a>');
        }
    };
});