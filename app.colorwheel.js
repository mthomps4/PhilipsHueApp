var demoWheelElement = document.getElementById("colorWheelDemo");
var demoWheel = new iro.ColorWheel(demoWheelElement, {
// UI canvas dimensions:
// (Iro will try to use up as much canvas space as possible)
width: 320,
height: 320,

// Radius of the markers that show the current color:
markerRadius: 8,
// Padding space around the markers:
padding: 4,
// Space between the hue/saturation ring and the value slider:
sliderMargin: 24,

// Initial color value -- any valid CSS color string works:
color: "#fff"
});

demoWheel.watch(function(color) {
  console.log(color.hsv);
  $("#selectedColor").css({backgroundColor: color.hexString});
  $("#colorBar").css({borderBottom: "2px solid " + color.hexString});
});
