
setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Secret Deal";
    document.getElementsByName('is_secret_deal')[0].click();
    document.getElementsByClassName('bs--display-ib')[0].value = "28";
    $("[name^=rates_]").click();
    $("[name^=room_]").click();
    window.Backbone.$('input').change();
},10000);

