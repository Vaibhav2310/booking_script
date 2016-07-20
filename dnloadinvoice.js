function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



setTimeout(function(){
	var elem10 =  document.createElement('script');
	var body =  document.getElementsByTagName('body')[0];
	elem10.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
	body.appendChild(elem10)
	sleep(3000);
	$("[id^=pdfPath_0_]")[0].click();

},15000);
