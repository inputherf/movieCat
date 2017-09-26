angular.module("publicModule",[])
    .service("myService",[function () {
        this.url= "https://api.douban.com";
        this.myJsonp=function (url,params,callback) {
            var script=document.createElement("script");
            var cbName="jsonp"+Math.random().toString().replace('.','');
            //以cbName作为名字将callback存到window中去
            window[cbName]=function (data) {
                callback(data);
                //删除掉当前script标签
                document.body.removeChild(script);
                //删除掉window中的cbName对应的函数
                delete window[cbName];
            };
            //做参数处理
            var paramsStr="";
            for(var k in params){
                paramsStr +=k + "="+params[k]+"&";
            }
            //将参数和url地址进行拼合
            url =url + "?"+paramsStr;
            //将cbName通知给后台，让后台指定的调用我们自己已经存好的函数
            url=url+"callback="+cbName;
            //给script标签设置src属性
            script.src=url;
            //将script标签加入到要页面中
            document.body.appendChild(script);
        }
    }])
