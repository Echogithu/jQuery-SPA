var test = {
    render: function() {
        $("#app").load("pages/test.html",this.init)
    },
    init: function() {
        var msg = 'hi test'

        $("#home").click(function(){
            router.to('home')
        })

        $("#test").on('click', function(){
            console.log('test')
            console.log(msg)
        })
    }
}
