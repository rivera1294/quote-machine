(function($){
    var App = {
        init: function() {
            this.bindEvents();
        },
        getQuote: function() {
            
            $.ajax({
                url: "http://api.forismatic.com/api/1.0/", 
                jsonp: 'jsonp',
                dataType: 'jsonp',
                data: {
                    method: "getQuote",
                    format: "jsonp",
                    lang: "en"
                },
                success: function(data) {
                    console.log(data.quoteText);
                }
                })
            },

        filterData: function(data) {
            data.forEach(function(item){
                console.log(item);
            })
        },

        bindEvents: function() {
            $(".new-quote").on('click', this.getQuote.bind(this))
        }
    }

    App.init();
})(jQuery);

