var rowsNumber = 16;
var columnsNumber = rowsNumber;
var cellsWidth = 100;
var cellsHeight = 100;
var cellsMarginLeft = 5;
var cellsMarginTop = 5;
var cellsNumber;
var containerWidth;
var containerMargin = 100;
var redValue;
var greenValue;
var blueValue;
var rgbValue;

$(document).ready(function() {


  var randomColor = function() {
    redValue = Math.floor(Math.random() * 256);
    greenValue = Math.floor(Math.random() * 256);
    blueValue = Math.floor(Math.random() * 256);
    return rgbValue = "rgb(" + redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")";
  }

  var createGrid = function() {
    cellsNumber = rowsNumber*columnsNumber;
    containerWidth = (cellsMarginLeft+cellsWidth)*columnsNumber+containerMargin;

    for (var i=0; i<cellsNumber; i++) {
      $('#grid').append('<li class="cells"></li>');
    }

    $('.cells').css('width', cellsWidth);
    $('.cells').css('height', cellsHeight);
    $('.cells').css('margin-left', cellsMarginLeft);
    $('.cells').css('margin-top', cellsMarginTop);
    $('#container').css('width', containerWidth);
    $('#container').css('margin-top', containerMargin);

    randomColor();

    $('.cells').hover(function() {
      $(this).css('background-color', randomColor());
    },function(){
      $(this).css('background-color', rgbValue);
    });
  };

  randomColor();
  createGrid();

  $('#grid').before('<div class="new_grid"><button>New Grid</button></div>');

  $('.new_grid').click(function() {
      $('.cells').remove();
      rowsNumber = prompt("How many squares per side do you want on your new grid?");
      columnsNumber = rowsNumber;
      createGrid();
  });

});
 
