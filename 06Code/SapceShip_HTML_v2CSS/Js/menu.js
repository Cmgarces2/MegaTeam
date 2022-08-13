$(document).ready(main);

var contador = 0;

function main(){
	$('.menu_bar').click(function(){
        if(contador == 0){
			$('nav').toggle({
				left: '1'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').toggle({
				left: '-100%'
			});
		}
	});
};