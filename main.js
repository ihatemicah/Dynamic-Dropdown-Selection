

$('#products').on('change', function() {
  // Stick Up Camera
  if(this.value == "1"){
      // REMOVES PREVIOUS SUC CLASS ON LOAD
      $(".suc").remove();
      // APPENDS TO DOWNLOAD
      $(".download").append("<option class='suc' value='0' > Download Speed </option>");
      $(".download").append("<option class='suc' value='1' > 30ghz to 40ghz </option>");
      $(".download").append("<option class='suc' value='2' > 50ghz to 70ghz </option>");
      $(".download").append("<option class='suc' value='3' > 80ghz to 100ghz </option>");
      //APPENDS TO UPLOAD
      $(".upload").append("<option class='suc' value = '0' > Upload Speed </option>");
      $(".upload").append("<option class='suc' value = '1' > 1ghz to 5ghz </option>");
      $(".upload").append("<option class='suc' value = '2' > 5ghz to 10ghz </option>");
      $(".upload").append("<option class='suc' value = '3' > 10ghz to 50ghz </option>");

      // REMOVES OPTION VALUE FROM SELECT
      $(".doorbell").remove();
      $(".chime").remove();

    }
  // Ring Video Doorbell
  if (this.value == '2') {
      // APPENDS OPTION VALUE TO SELECT
      $(".download").append("<option class='doorbell' value = '0' >Download Speed</option>");
      $(".download").append("<option class='doorbell' value = '4' >50ghz to 25ghz</option>");
      $(".download").append("<option class='doorbell' value = '5' >25ghz to 70ghz</option>");
      $(".download").append("<option class='doorbell' value = '6' >100ghz to 50ghz</option>");
      // APPENDS TO UPLOAD
      $(".upload").append("<option class='doorbell' value = '0'  > Upload Speed </option>");
      $(".upload").append("<option class='doorbell' value = '4'  > 5ghz to 15ghz </option>");
      $(".upload").append("<option class='doorbell' value = '5'  > 15ghz to 30ghz </option>");
      $(".upload").append("<option class='doorbell' value = '6'  > 30ghz to 100ghz </option>");

      // REMOVES OPTION VALUE FROM SELECT
        $(".suc").remove();
        $(".chime").remove();
    }
  // Chime
  if (this.value == '3') {
      // APPENDS TO DOWNLOAD
        $(".download").append("<option class='chime' value = '0'  >Download Speed</option>");
        $(".download").append("<option class='chime' value = '7'  >20ghz to 50ghz</option>");
        $(".download").append("<option class='chime' value = '8'  >25ghz to 70ghz</option>");
        $(".download").append("<option class='chime' value = '9'  >80ghz to 100ghz</option>");
        // APPENDS TO UPLOAD
        $(".upload").append("<option class='chime' value = '0'  > Upload Speed </option>");
        $(".upload").append("<option class='chime' value = '7'  > 2ghz to 15ghz </option>");
        $(".upload").append("<option class='chime' value = '8'  > 15ghz to 30ghz </option>");
        $(".upload").append("<option class='chime' value = '9'  > 40ghz to 60ghz </option>");
        // REMOVES OPTION VALUE FROM SELECT
        $(".suc").remove();
        $(".doorbell").remove();
    }
});


/*
* Credits : http://stackoverflow.com/questions/29297524/javascript-show-hide-div-based-on-multiple-dropdown-selections
*
*/

// Hide All Selections.
$('.selection-1').hide();
$('.selection-2').hide();
$('.selection-3').hide();

console.log(" Hide Divs ");

// Filtering Script.
var $selects = $('.question select');
$selects.on('change', getValues).first().trigger("change");
// puts values into array
function getValues() {
  var vals = $selects.map(function() {
    return this.value;
  }).get();

  //Joins array of values into string and scans within case.
  console.log(vals);
  switch (vals.join (' '))
  {
    // Good Wifi At Product
    case '1 3 3 0 0':
    case '2 6 6 0 0':
    case '3 9 9 0 0':
      $('.selection-1').fadeIn('swing');
      $('.selection-2 , .selection-3').hide();
    break;
    // Bad at Product & Good at Router
    case '1 1 1 3 3':
    case '2 4 4 6 6':
    case '3 7 7 9 9':
      $('.selection-2').fadeIn('swing');
      $('.selection-1 , .selection-3').hide();
      break;
    default:
    // If no match all selections are hidden.
    $('.selection-1 , .selection-2 , .selection-3').hide();


  }
}
