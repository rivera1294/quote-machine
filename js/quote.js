(function($){
    var App = {
        init: function() {
            this.cachDom();
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
                    if(data.quoteAuthor == "") {
                        this.$author.html("unkown");
                        this.$quote.html(data.quoteText);
                    }
                    else {
                        this.$quote.html(data.quoteText);
                        this.$author.html(data.quoteAuthor);
                    }
                    
                }.bind(this)
                })
            },

        
        cachDom: function() {
            this.$quote = $(".quote");
            this.$author = $(".author");
        },

        bindEvents: function() {
            $(".new-quote").on('click', this.getQuote.bind(this))
        }

        
    }

    App.init();
})(jQuery);

