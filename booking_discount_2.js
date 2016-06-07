

setTimeout(function(){
    document.getElementsByClassName('rate-name__input')[0].value = "Secret Deal";
    document.getElementsByName('is_secret_deal')[0].click();
    document.getElementsByClassName('bs--display-ib')[4].value = "28";
    document.getElementsByClassName('ui-state-default')[98].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-datepicker-next')[1].click();
    document.getElementsByClassName('ui-state-default')[122].click();
    window.Backbone.$('input').change();
    
},3000);

setTimeout(function(){
    $("[name^=rates_]").click();
    
    $("[name^=room_]").prop('checked', true);

},6000);

