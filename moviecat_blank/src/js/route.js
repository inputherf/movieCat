angular.module("movieCat.route",[])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when("/in_theaters/:page",{
                templateUrl:"./views/in_theaters/in_theaters.html",
                controller:"in_theatersCtrl"
            })
            .when("/coming_soon/:page",{
                templateUrl:"./views/coming_soon/coming_soon.html",
                controller:"coming_soonCtrl"
            })
            .when("/search/:keyword/:page",{
                templateUrl:"./views/search/search.html",
                controller:"searchCtrl"
            })
            .otherwise("/in_theaters/1")
    }])
