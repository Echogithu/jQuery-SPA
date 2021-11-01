var Header = {
  render: function (element) {
    this.loadCss();
    $(element).load("components/Header/Header.html", this.init);
  },
  //加载组件对应css文件
  loadCss: function () {
    loadCss("components/Header/Header.css");
  },

  //获取当前时间
  getDateTime: function () {
    let date = new Date();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDate = date.getDate();
    let dateDay = "日一二三四五六".charAt(date.getDay());
    var h = date.getHours();
    var M = date.getMinutes();

    $(".dateYear").text(dateYear);
    $(".dateMonth").text(dateMonth);
    $(".dateDate").text(dateDate);
    $(".dateDay").text(dateDay);
    $(".time").text(h + ":" + M);
  },

  //显示列表
  avatar: function () {
    $(".header_name").hover(function () {
      $(".header_list").toggle();
    });
  },

  //退出登录
  logout: function () {
    $(".logout").click(function () {
      let token = { token: getCookie("token") };
      var logoutUrl = "/api/logout";
      if (!globalConfig.localLogin) {
        logoutUrl = "/api/third/logout";
      }
      $.ajax({
        url: logoutUrl,
        type: "POST",
        data: JSON.stringify(token),
        success: function (res) {
          delCookie("name");
          delCookie("token");
          delCookie("password");
          router.to("login");
        },
      });
    });
  },

  init: function () {
    Header.getDateTime();
    Header.avatar();
    Header.logout();
  },
};

Header.render("#home_header");
