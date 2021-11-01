/*ajax请求全局设置*/
/*需要传入的options参数：
 * options: {
 *   url: string,
 *   type: string, //'GET'|'POST'|'PUT'|'DELETE'        (default: 'GET')，
 *   data: object // 无论是哪种请求方式，都是以data进行传参,
 *   success: function //请求成功后的回调函数
 *}
 * 请求错误已进行捕获处理,无需传入错误回调
 * */
var ajaxSetting = function (options) {
  var baseUrl = "/api/";
  return {
    url: baseUrl + options.url,
    type: options.type || "GET",
    dataType: "json",
    cache: false,
    data: options.data,
    /*设置请求头*/
    beforeSend: function (XMLHttpRequest) {
      var token = getCookie("token");
      /*重置缓存*/
      XMLHttpRequest.setRequestHeader("If-Modified-Since", "0");
      XMLHttpRequest.setRequestHeader("token", token);
    },

    success: function (res, textStatus, xhr) {
      if (res.code == 0) {
        options.success(res);
      } else {
        if (res.code == 10001) {
          console.log(getCookie("token"));

          console.log("10001 res");
          console.log(res);
          console.log(textStatus);
          console.log(xhr);
          delCookie("name");
          delCookie("token");
          delCookie("password");
          /*登录失效后清楚定时器*/
          clearInterval(Sider.visitorInterval);
          alert("登录状态失效，请重新登录");
          router.to("login");
        } else {
          console.log("REQUEST ERROR!");
          console.log(res);
          alert("错误码：" + res.code + "\n错误原因：" + res.error);
          throw new Error(res.error);
        }
      }
    },

    error: function (xhr, status, handler) {
      // alert("AJAX ERROR:" + xhr);
      console.log("xhr");
      console.log(xhr);
      console.log("status");
      console.log(status);
    },
  };
};

/*ajax请求前会触发该方法*/
$(document).ajaxSend(function (event, jqxhr, settings) {
  /*判断该请求是否为请求api接口，不是的话不进行处理*/
  var url = settings.url;
  if (!url.match(/^\/api/)) {
    return;
  }
  // console.log('url');
  // console.log(typeof url);
});
