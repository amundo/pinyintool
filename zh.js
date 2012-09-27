app = {};

app.rules = [
  [ "a1", "\u0101" ], 
  [ "a2", "\u00e1" ], 
  [ "a3", "\u01ce" ], 
  [ "a4", "\u00e0" ], 
  [ "e1", "\u0113" ], 
  [ "e2", "\u00e9" ], 
  [ "e3", "\u011b" ], 
  [ "e4", "\u00e8" ], 
  [ "i1", "\u012b" ], 
  [ "i2", "\u00ed" ], 
  [ "i3", "\u01d0" ], 
  [ "i4", "\u00ec" ], 
  [ "o1", "\u014d" ], 
  [ "o2", "\u00f3" ], 
  [ "o3", "\u01d2" ], 
  [ "o4", "\u00f2" ], 
  [ "u1", "\u016b" ], 
  [ "u2", "\u00fa" ], 
  [ "u3", "\u01d4" ], 
  [ "u4", "\u00f9" ], 
  [ "v1", "\u01d6" ], 
  [ "v2", "\u01d8" ], 
  [ "v3", "\u01da" ], 
  [ "v4", "\u01dc" ]
]

$(document).ready(function(){

    function transliterate(text){

      $.each(app.rules, function(i, rule){
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
