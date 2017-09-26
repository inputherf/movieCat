angular.module("commonModule",[])
    .controller("navCtrl",["$scope","$location",function ($scope,$location) {
        $scope.isActive="in_theaters";
        $scope.search=function () {
            var keyword=$scope.keyword;
            $location.path("/search/"+keyword+"/1");
        }
    }])