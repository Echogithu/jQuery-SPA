var testComponent = {
    render: function (element) {
        this.loadCss()
        $(element).load("components/testComponent/testComponent.html",this.init);
    },
    //加载组件对应css文件
    loadCss: function() {
        loadCss('components/testComponent/testComponent.css')
    },

    init: function () {
        // if(Sider.swap)
        var visitorInfo = Sider.visitorInfo
        var msg =  '测试组件11';
        setTimeout(function(){
            $('#testH1').text(Sider.visitorInfo.name)
        },500)

        // $('#testH1').text('123')
    },
};

testComponent.render('.testComponent')
