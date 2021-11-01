router.init();
window.addEventListener("hashchange", function (e) {
  var hash = window.location.hash.replace(/#/, "");
  // console.log(hash)
  router.to(hash);
});

var globalConfig = {
  localLogin: false,
};
