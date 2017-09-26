angular.module("coming_soonMoudle", [])
    .controller("coming_soonCtrl", ["$scope", "myService", "$location", "$routeParams", function ($scope, myService, $location, $routeParams) {
        var count = 20;
        var page = $routeParams.page;
        var start = (page - 1) * count;
        var totalPage = 0;
        myService.myJsonp("https://api.douban.com/v2/movie/coming_soon", {
            count: count,
            start: start
        }, function (data) {
            $scope.result = data;
            $scope.$apply();
            totalPage = Math.ceil(data.total / count);
        })
        $scope.changePage = function (type) {
            if (type == "next") {
                page++;
                if (page > totalPage) {
                    page = totalPage;
                }
            } else if (type == "prev") {
                page--;
                if (page < 1) {
                    page = 1
                }
            }
            $location.path("/coming_soon/" + page);
        }
    }])