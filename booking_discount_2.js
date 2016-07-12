

setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Flat 20% Off";
    document.getElementsByClassName('bs--display-ib')[4].value = "20";
     window.Backbone.$('input').change();
    
},3000);

setTimeout(function(){
    $("[name^=rates_]").click();
    

},6000);

