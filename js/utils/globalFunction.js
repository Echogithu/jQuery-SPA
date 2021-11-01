var cssCache = []

/*加载css文件*/
function loadCss(href){
    if(cssCache.indexOf(href) !== -1){
        return
    }
    var link = document.createElement('link');
    link.type = "text/css";
    link.rel = 'stylesheet';
    link.href = "components/testComponent/testComponent.css"
    link.href = href
    $("head").append(link)
    cssCache.push('href')
}
