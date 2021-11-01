var router = {
    /*配置路由*/
    /*路由组件的js文件和css文件名称必须与routers中的hash一致*/
    routes: [
        {
            hash: "home",
            name: "home",
            title: "首页",
        },
        {
            hash: "detail",
            name: "detail",
            title: "详情"
        },
        {
            hash: "test",
            name: "test",
            title: "test"
        },
        {
            hash: "notFound",
            name: "notFound",
            title: "找不到该页面",
            hasLoaded: true
        }
    ],

    /*设置默认路由地址*/
    hash: '',

    // 根据hash获取其父亲节点
    getActiveByHost: function () {
        /*从routes中匹配url中的hash值，如果匹配不到则url中的hash值改为notFound*/
        for (var i = 0; i < this.routes.length; i++) {
            if (this.routes[i].hash === this.hash) {
                // 路由匹配成功
                if(!this.routes[i].hasLoad) {
                    //开始创建并加载页面js
                    try {
                        var script = document.createElement("script");  //创建一个script标签
                        script.type = "text/javascript";
                        script.src = "js/business/"+this.hash+".js"
                        $('body').append(script);
                        /*设置加载缓存*/
                        this.routes[i].hasLoad = true

                        //加载页面对应css文件
                        var href = "./css/"+this.hash+".css"
                        loadCss(href)
                   }catch (e) {
                       console.log('!!!!ERROR')
                       console.log(e);
                   }
                }
                    return
            }
        }

        // 路由匹配失败
        this.hash = 'notFound'
    },

    /*全局路由守卫*/
    beforeRouter: function() {
        if(this.hash === 'login')
            return
        //判断是否登录
        var name = getCookie("name");
        var token = getCookie("token");
        if (!name || !token) {
            alert('您未登录，请先登录')
            this.hash = "login";
        }
    },


    /*匹配路由并渲染*/
    to: function (hash) {
        /*设置默认路由*/
        if(!hash){
            hash = 'home'
        }
        this.hash = hash
        /*根据当前hash值匹配路由*/
        this.getActiveByHost()
        /*执行路由守卫*/
        // this.beforeRouter()
        /*当hash不再变化时进行渲染*/
        if(window.location.hash  === '#'+this.hash) {
            /*根据hash调用页面js中的render方法进行加载并渲染*/
            // console.log('render')
            try {
                window[this.hash].render()
                document.title = 'JQuery-SPA'
                return
            }catch (e) {
                console.log('ERROR')
                console.log(e);
            }
        }
        window.location.hash = "#" + this.hash
    },


    //初始化router
    init: function () {
        this.hash = window.location.hash.replace("#", "")
        /*根据当前hash地址渲染路由地址指向的页面*/
        this.to(this.hash)
    }
};
