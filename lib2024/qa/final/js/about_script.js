$(function () {
    // For each skills progress bar in the ".skills-prog" list
    $(".skills-prog li").find(".skills-bar").each(function (i) {
      // Delay the animation based on the index (i) multiplied by 150ms
      $(this).find(".bar").delay(i * 150).animate({
        // Set the width of the progress bar to the value specified in the "data-percent" attribute
        width: $(this).parents().attr("data-percent") + "%"
      }, 1000, "linear", function () {
        // Set transition duration to ".5s" after animation completes
        return $(this).css({
          "transition-duration": ".5s"
        });
      });
    });
  
    // For each skills progress bar in the ".skills-soft" list
    $(".skills-soft li").find("svg").each(function (i) {
      // Extract relevant data for animation calculations
      var c, cbar, circle, percent, r;
      circle = $(this).children(".cbar");
      r = circle.attr("r");
      c = Math.PI * (r * 2);
      percent = $(this).parent().data("percent");
      cbar = (100 - percent) / 100 * c;
      // Set initial stroke-dashoffset and stroke-dasharray for the circle
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      // Delay the animation based on the index (i) multiplied by 150ms
      circle.delay(i * 150).animate({
        // Set the stroke-dashoffset of the circle to the calculated value
        strokeDashoffset: cbar
      }, 1000, "linear", function () {
        // Set transition duration to ".3s" after animation completes
        return circle.css({
          "transition-duration": ".3s"
        });
      });
      // Animate the text counter next to the circle with the percentage value
      $(this).siblings("small").prop("Counter", 0).delay(i * 150).animate({
        // Set the counter value to the percentage value
        Counter: percent
      }, {
        duration: 1000,
        step: function (now) {
          // Update the text of the counter with the rounded up value of the counter
          return $(this).text(Math.ceil(now) + "%");
        }
      });
    });
  }.call(this));
  


