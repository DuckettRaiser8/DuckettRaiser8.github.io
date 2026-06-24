// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here

function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++){
  for(var j = 0; j < image[i].length; j++){
    var pixel = image[i][j];
    var pixelArray = rgbStringToArray(pixel);
    // This is where I’ll modify the color values later
    filterFunction(pixelArray);
    var updatedPixel = rgbArrayToString(pixelArray);
    image[i][j] = updatedPixel;
  }
}
}

// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function

function keepInBounds(num){
if(num < 0){
  return 0;
}
else if(num > 255){
  return 255;
}
else {
  return num;
}
}

console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125

// TODO 4: Create reddify filter function

function reddify (pixelArray){
   pixelArray[RED] = pixelArray[RED] + 100;
}

var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]

// TODO 7 & 8: Create more filter functions

function decreaseBlue(pixelArray){
  pixelArray[BLUE] = pixelArray[BLUE] - 50;
  keepInBounds(pixelArray[BLUE]);
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE]);
}


function increaseGreenbyBlue(pixelArray){
pixelArray[GREEN] = pixelArray[BLUE] + pixelArray[GREEN];
keepInBounds(pixelArray[GREEN]);
pixelArray[GREEN] = keepInBounds(pixelArray[GREEN]);
}


// CHALLENGE code goes below here
