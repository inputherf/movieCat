angular.module("in_theatersModule",[])
    .controller("in_theatersCtrl",["$scope","myService","$routeParams","$location",function ($scope,myService,$routeParams,$location) {
    var page=$routeParams.page;
    var count=10;
    var start=(page-1)*count;
    var totalPage=0;
    myService.myJsonp("https://api.douban.com/v2/movie/in_theaters",{
        count:count,
        start:start,
    },function (data) {
        // console.log(data);
        $scope.result=data;
        $scope.$apply();
        totalPage=Math.ceil(data.total/count);
    })
    $scope.changePage=function (type) {
        if(type == "next"){
            page++;
            if(page>totalPage){
                page=totalPage;
            }
        }else if(type == "prev"){
            page--;
            if(page<1){
                page=1
            }
        }
        $location.path("/in_theaters/"+page);
    }

}])
