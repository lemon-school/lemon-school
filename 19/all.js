// $('h1, h2').addClass('red');
$('h1').on('click', function() {
	$('h1').removeClass('blue');
	$(this).addClass('blue');
});

$('textarea').on('input', function() {
	var value = this.value;
	$('div').html(value)
});

$('form').on('submit', function(event) {
	if ( $('input').val() == '' ) {
		event.preventDefault();
		$('input').addClass('error').trigger('focus')
		$('label').html('Поле имя обязятельно для заполнения')
	}
});

// $('input').on('change', function() {
// 	$('p').html('change')
// });
// $('input').on('input', function() {
// 	$('p').html('input')
// });
// $('input').on('focus', function() {
// 	$('p').html('focus')
// });
// $('input').on('blur', function() {
// 	$('p').html('blur')
// });