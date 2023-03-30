$(document).ready(function(){
    var interval = 7000; // interval between slide transitions
var slider = $('.slider-container');
var images = $('.slider-image');
var index = 0;

// set the first image to be active
images.eq(index).addClass('active');

setInterval(function() {
  // fade out the current image
  images.eq(index).removeClass('active');

  // move to the next image
  index = (index + 1) % images.length;

  // move the first image to the end of the container
  if (index === 0) {
    slider.append(images.eq(0));
  }

  // fade in the next image
  images.eq(index).addClass('active');
}, interval);

  
    // handle click events for navigation buttons
    $('.slider-prev').click(function() {
      images.eq(index).removeClass('active');
      index = (index - 1 + images.length) % images.length;
      if (index === images.length - 1) {
        slider.prepend(images.eq(images.length - 1));
      }
      images.eq(index).addClass('active');
    });
  
    $('.slider-next').click(function() {
      images.eq(index).removeClass('active');
      index = (index + 1) % images.length;
      if (index === 0) {
        slider.append(images.eq(0));
      }
      images.eq(index).addClass('active');
  });
  

})
