

setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Secret Deal";
    document.getElementsByName('is_secret_deal')[0].click();
    $("[name^=rates_]").click();
    $("[name^=room_]").click();
    window.Backbone.$('input').change();
},5000);

setTimeout(function(){
    document.getElementsByClassName('bs--display-ib')[4].value = "28";
    window.Backbone.$('input').change();
},7000);
