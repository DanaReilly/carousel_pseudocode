
var images=['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];

var currentPosition = 0;

var votes = [0,0,0,0,0,0];

$('#next').on('click', function () {

	currentPosition += 1;

	$('#prev').prop('disabled', false);

	$('#image-to-vote-on').attr('src', images[currentPosition]);

 	if (currentPosition === images.length - 1) {

		$('#next').prop('disabled', true);

	}
});

$('#prev').on('click', function () {

	currentPosition -= 1;

	$('#next').prop('disabled', false);

	$('#image-to-vote-on').attr('src', images[currentPosition]);

	if (currentPosition === 0 ) {

		$('#prev').prop('disabled', true);
		
	}
});