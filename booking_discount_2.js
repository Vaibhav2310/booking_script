

setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Secret Deal";
    document.getElementsByName('is_secret_deal')[0].click();
    document.getElementsByClassName('bs--display-ib')[4].value = "28";
     window.Backbone.$('input').change();
    
},3000);

setTimeout(function(){
    $("[name^=rates_]").click();
    

},6000);

