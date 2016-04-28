// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var images=['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];

// Set a variable for the current position(index) and give it an initial value of 0
var currentPosition = 0;

// Set an array for votes
var votes = [0,0,0,0,0,0];

// EVENTS ---------

// When the user clicks on the "next" button
$('#next').on('click', function () {
	
	// Update our current position (if we were on image 1, we want to be on image 2)
	currentPosition += 1;

	// Make sure the previous button is enabled
	$('#prev').prop('disabled', false);

	// Update the src attribute for the image to the url for the new image
	$('#image-to-vote-on').attr('src', images[currentPosition]);

	// If we are on the last image
 	if (currentPosition === images.length - 1) {

 		// Disable the next button
		$('#next').prop('disabled', true);

	}
});

$('#prev').on('click', function () {
	// Update our current position (if we were on image 2, we want to be on image 1)
	currentPosition -= 1;

	// Make sure the next button is enabled
	$('#next').prop('disabled', false);

	// Update the src attribute to the urls that is stored at the current position in the array
	$('#image-to-vote-on').attr('src', images[currentPosition]);

	// If we are on the first image
	if (currentPosition === 0 ) {
		// Disable the previous button
		$('#prev').prop('disabled', true);
	}
});