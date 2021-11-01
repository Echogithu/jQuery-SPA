var home = {
    render: function () {
        $("#app").load("pages/home.html",this.init);
    },
    init: function () {

        var msg =  'this is changed message';

        $("#changeMsg").click(function() {
            $("#home_msg").text(msg)
        });

        $("#detail").click(function() {
            router.to('detail')
        });
        $("#test").click(function() {
            router.to('test')
        });

    }
};
