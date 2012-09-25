app = {};

$(document).ready(function(){

    function transliterate(text){

      var rules = [ [ "1", "\u0304" ], [ "2", "\u0301" ], [ "3", "\u030C" ], [ "4", "\u0300" ], ["v", "ü"] ];

      $.each(rules, function(i, rule){
        var beforeRE = new RegExp(rule[0], 'g'),
            after = rule[1];

        text = text.replace(beforeRE, after);

      })
      return text;
    }
    app.converter = new Showdown.converter;

    $('#before').keyup(function(ev){
      ev.preventDefault;

      var transliterated = transliterate($(this).val());
      var html = app.converter.makeHtml(transliterated); 
      $('#after').html(html);

    })

})
