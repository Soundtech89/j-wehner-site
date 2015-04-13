function toggle(element) {
  var e = document.getElementById(element);
  if(e.style.display == "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
};

(function (document, window, undefined) {
  'use strict';
  
  // Find each tooltip
  var tooltip = $('img');

  tooltip.each(function() {
    // Create tooltip element
    var $this = $(this),
        tooltipText = $('<div class="tooltip-text">' + $this.data('tooltip-text') + '</div>');
      
    // Add tooltip to body on mouse over
    $this.on('mouseover', function() {
        tooltipText.appendTo('body');
    });
  
    // Remove tooltip on mouseout
    $this.on('mouseout', function() {
        tooltipText.remove();
    });
  
    // Attach the tooltip to the mouse cursor
    $this.on('mousemove', function(e) {
        tooltipText.css('top', (e.pageY + 20) + 'px');
        tooltipText.css('left', (e.pageX + 20) + 'px');
    });
  
  });
  
})(document, window);