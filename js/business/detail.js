var detail = {
    render: function () {
        $("#app").load("pages/detail.html", this.init)
    },
    init: function () {
        $("#home").click(function(){
            router.to("home")
        })
    },
}
