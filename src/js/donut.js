var per = $('.donut').attr('data-per');
var percent_ani = setInterval(ani, 10);
var num = 0;

function ani(){
	num++;
	$(':root').css({
		'--percent':num.toString()
	})

	if( num > 50 )
		$('.donut').addClass('large');

	if( num == per )
		clearInterval(percent_ani);
}
