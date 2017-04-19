

$('#products').on('change', function() {
  // Stick Up Camera
  if(this.value == "1"){
      // REMOVES PREVIOUS SUC CLASS ON LOAD
      $(".suc").remove();
      // APPENDS TO DOWNLOAD
      $(".download").append("<option class='suc' value='0' > Download Speed </option>");
      $(".download").append("<option class='suc' value='1' > < 1mbs </option>");
      $(".download").append("<option class='suc' value='2' > 1mbs - 5mbs </option>");
      $(".download").append("<option class='suc' value='3' > 5mbs + </option>");
      //APPENDS TO UPLOAD
      $(".upload").append("<option class='suc' value = '0' > Upload Speed </option>");
      $(".upload").append("<option class='suc' value = '1' > < 1mbs </option>");
      $(".upload").append("<option class='suc' value = '2' > 1mbs to 5mbs </option>");
      $(".upload").append("<option class='suc' value = '3' > 5mbs + </option>");

      // REMOVES OPTION VALUE FROM SELECT
      $(".doorbell").remove();
      $(".chime").remove();

    }
  // Ring Video Doorbell
  if (this.value == '2') {
      // APPENDS OPTION VALUE TO SELECT
      $(".download").append("<option class='doorbell' value = '0' >Download Speed</option>");
      $(".download").append("<option class='doorbell' value = '4' > < 1mbs </option>");
      $(".download").append("<option class='doorbell' value = '5' >1mbs - 5mbs</option>");
      $(".download").append("<option class='doorbell' value = '6' >5mbs + </option>");
      // APPENDS TO UPLOAD
      $(".upload").append("<option class='doorbell' value = '0'  > Upload Speed </option>");
      $(".upload").append("<option class='doorbell' value = '4'  > < 1mbs </option>");
      $(".upload").append("<option class='doorbell' value = '5'  > 1mbs - 5mbs </option>");
      $(".upload").append("<option class='doorbell' value = '6'  > 5mbs + </option>");

      // REMOVES OPTION VALUE FROM SELECT
        $(".suc").remove();
        $(".chime").remove();
    }
  // Chime
  if (this.value == '3') {
      // APPENDS TO DOWNLOAD
        $(".download").append("<option class='chime' value = '0'  >Download Speed</option>");
        $(".download").append("<option class='chime' value = '7'  > < 1mbs </option>");
        $(".download").append("<option class='chime' value = '8'  >1mbs - 5mbs</option>");
        $(".download").append("<option class='chime' value = '9'  >5mbs + </option>");
        // APPENDS TO UPLOAD
        $(".upload").append("<option class='chime' value = '0'  > Upload Speed </option>");
        $(".upload").append("<option class='chime' value = '7'  > < 1mbs </option>");
        $(".upload").append("<option class='chime' value = '8'  > 1mbs - 5mbs </option>");
        $(".upload").append("<option class='chime' value = '9'  > 5mbs + </option>");
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
  // LOOK AT CONSOLE :)
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
    case '1 2 2 2 2':
    case '1 1 2 2 2':
    case '1 1 1 2 2':
    case '1 1 1 3 2':
    case '2 4 4 5 5':
    case '2 4 4 6 5':
    case '3 7 7 8 8':
    case '3 7 7 9 8':
    case '3 7 7 8 8':
    case '3 7 7 9 8':
      // Overides for below 1mbs
      case '1 1 0 0 0':
      case '1 1 1 0 0':
      case '1 0 1 0 0':
      // ---------------------
      case '2 4 0 0 0':
      case '2 4 4 0 0':
      case '2 0 4 0 0':
      // --------------------=
      case '3 7 0 0 0':
      case '3 7 7 0 0':

      $('.selection-2').fadeIn('swing');
      $('.selection-1 , .selection-3 ' ).hide();
      break;
    // Bad at router - Calling ISP
    case '1 0 0 1 1':
    case '2 0 0 4 4':
    case '3 0 0 7 0':
    case '1 1 1 1 1':
    case '2 4 4 4 4':
    case '3 7 7 7 7':
    case '1 1 1 2 1':
    case '1 1 1 3 1':
    case '1 2 1 1 1':
      // Overrides for below 1mbs
      case '1 1 0 1 0':
      case '1 0 1 1 0':
      case '1 0 0 1 0':
      case '1 1 1 1 0':
      case '1 0 1 0 1':
      case '1 1 0 0 1':
      // --------------------------
      case '2 4 0 4 0':
      case '2 4 0 0 4':
      case '2 0 0 0 4':
      case '2 0 0 4 0':

    $('.selection-3').fadeIn('swing');
    $('.selection-2 , .selection-1').hide();
      break;
    default:
    // If no match all selections are hidden.
    $('.selection-1 , .selection-2 , .selection-3').hide();


  }
}
