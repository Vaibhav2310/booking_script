

setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Secret Deal";
    document.getElementsByName('is_secret_deal')[0].click();
    document.getElementsByClassName('bs--display-ib')[4].value = "28";
    window.Backbone.$('input').change();
    $("[name^=rates_]").click();
    $("[name^=room_]").click();
},5000);

