/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 * Modified: scattm (ntngh2712@gmail.com)
 */

function initLocalClocks(parent_element, init_datetime) {
  // Get the local time using JS
  var date = init_datetime !== undefined ? init_datetime: new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = parent_element.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
      elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
      }
    }
  }
}
