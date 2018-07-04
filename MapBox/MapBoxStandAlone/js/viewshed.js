// options for viewshed
var centerX = 31.132941;
var centerY = 29.977597;

// Number of lines drawn (higher will increase the quality of the viewshed, but slow performance)
var qualityValue = 360;

// How large do you want the viewshed?
var radius = 250;

var intersection;
var intersectionCoords;

var linesDrawn = false;
var conflictCheck = false;

var intersectionArray = [];
var pointsArray = [];

// Holds mousedown state for events. if this
// flag is active, we move the point on `mousemove`.
var isDragging;

// Is the cursor over a point? if this
// flag is active, we listen for a mousedown event.
var isCursorOverPoint;

// Add powerful sunglasses
var el = document.createElement('i');
el.classList.add('em');
el.classList.add('em-dark_sunglasses');

var bounds = [
  [31.115562, 29.965652],
  [31.147014, 29.990302]
];