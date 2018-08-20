//Service Worker
/*if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}*/

/*
if('serviceWorker' in navigator){

	navigator.serviceWorker
	.register('./sw.js')
	.then(res => console.log('serviceWoker cargado correctamente', res))
	.catch(err => console.log('no se ha podido registrar serviceWorker', err));
}else{
	console.log('no puedes');
}
*/

//croll Suavizado
$(document).ready(function(){
	$('#menu a').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		});
		return false;
	});
});