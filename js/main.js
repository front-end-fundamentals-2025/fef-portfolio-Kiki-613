const greyimages = document.querySelectorAll(
  'img[src="img/photography.png"], img[src="img/game.PNG"], img[src="img/invitation.png"], img[src="img/instagram.png"], img[src="img/assets.png"]'
);

// The code on lines 9 and 14 was inspired by this video on hover effect: https://www.youtube.com/watch?v=1xEfqgElMsY
// the code on lines 10 and 14 - the greyscale effect - was inspired by this video: https://www.youtube.com/watch?v=KTcxxpToQBc
// Loop through all selected images
greyimages.forEach(function (greyimage) {
  greyimage.addEventListener("mouseenter", function () {
    greyimage.style.filter = "grayscale(0%)"; // Remove greyscale on hover
  });

  greyimage.addEventListener("mouseleave", function () {
    greyimage.style.filter = "grayscale(100%)"; // Set greyscale back when hover ends
  });
});
