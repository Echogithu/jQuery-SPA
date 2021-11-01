var Sider = {
  render: function (element) {
    this.loadCss();
    console.log("this", this)
    $(element).load("components/Sider/Sider.html", this.init);
  },
  loadCss: function () {
    //加载组件对应css文件
    loadCss("components/Sider/Sider.css");
  },


  init: function () {
    $("#test").click(function () {
      router.to('test')
    })

    $("#detail").click(function () {
      router.to('detail')
    })
  },
};
Sider.render(".Sider");
