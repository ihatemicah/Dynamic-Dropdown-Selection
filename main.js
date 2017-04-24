

$('#products').on('change', function() {
  // Stick Up Camera
  if(this.value == "1"){
      // REMOVES PREVIOUS SUC CLASS ON LOAD
      $(".suc").remove();
      // APPENDS TO DOWNLOAD
      $(".download").append("<option class='suc' value='0' > Download Speed </option>");
      $(".download").append("<option class='suc' value='1' > < 1mbs </option>");
      $(".download").append("<option class='suc' value='2' > 1mbs - 2mbs </option>");
      $(".download").append("<option class='suc' value='3' > > 2mbs </option>");
      //APPENDS TO UPLOAD
      $(".upload").append("<option class='suc' value = '0' > Upload Speed </option>");
      $(".upload").append("<option class='suc' value = '1' > < 1mbs </option>");
      $(".upload").append("<option class='suc' value = '2' > 1mbs - 2mbs </option>");
      $(".upload").append("<option class='suc' value = '3' > > 2mbs </option>");

      // REMOVES OPTION VALUE FROM SELECT
      $(".doorbell").remove();
      $(".chime").remove();

    }
  // Ring Video Doorbell
  if (this.value == '2') {
      // APPENDS OPTION VALUE TO SELECT
      $(".download").append("<option class='doorbell' value = '0' > Download Speed</option>");
      $(".download").append("<option class='doorbell' value = '1' > < 1mbs </option>");
      $(".download").append("<option class='doorbell' value = '2' > 1mbs - 5mbs</option>");
      $(".download").append("<option class='doorbell' value = '3' > > 2mbs </option>");
      // APPENDS TO UPLOAD
      $(".upload").append("<option class='doorbell' value = '0'  > Upload Speed </option>");
      $(".upload").append("<option class='doorbell' value = '1'  > < 1mbs </option>");
      $(".upload").append("<option class='doorbell' value = '2'  > 1mbs - 2mbs </option>");
      $(".upload").append("<option class='doorbell' value = '3'  > > 2mbs </option>");

      // REMOVES OPTION VALUE FROM SELECT
        $(".suc").remove();
        $(".chime").remove();
    }
  // Chime
  if (this.value == '3') {
      // APPENDS TO DOWNLOAD
        $(".download").append("<option class='chime' value = '0'  > Download Speed</option>");
        $(".download").append("<option class='chime' value = '1'  > < 1mbs </option>");
        $(".download").append("<option class='chime' value = '2'  > 1mbs - 2mbs</option>");
        $(".download").append("<option class='chime' value = '3'  > > 2mbs </option>");
        // APPENDS TO UPLOAD
        $(".upload").append("<option class='chime' value = '0'  > Upload Speed </option>");
        $(".upload").append("<option class='chime' value = '1'  > < 1mbs </option>");
        $(".upload").append("<option class='chime' value = '2'  > 1mbs - 2mbs </option>");
        $(".upload").append("<option class='chime' value = '3'  > > 2mbs </option>");
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
    case '1 0 3 0 0':
    case '1 3 0 0 0':
      $('.selection-1').fadeIn('swing');
      $('.selection-2 , .selection-3 , .selection-4').hide();
    break;


  // Bad at Product & Good at Router ------
    case '1 1 1 3 3':
    case '1 2 2 2 2':
    case '1 1 2 2 2':
    case '1 1 1 2 2':
    case '1 1 1 3 2':
    case '1 1 1 3 0':
    case '1 0 1 3 3':
    case '1 0 1 3 0':
    case '1 0 1 0 3':
    case '1 1 0 3 0':
    case '1 1 0 0 3':
    // TEMP
    case '1 0 1 0 2':

    // -------------------------- DEVICE BREAK
    case '2 1 1 3 3':
    case '2 2 2 2 2':
    case '2 1 2 2 2':
    case '2 1 1 2 2':
    case '2 1 1 3 2':
    case '2 1 1 3 0':
    case '2 0 1 3 3':
    case '2 0 1 3 0':
    case '2 0 1 0 3':
    case '2 1 0 3 0':
    case '2 1 0 0 3':
    // -------------------------- DEVICE BREAK
    case '3 1 1 3 3':
    case '3 2 2 2 2':
    case '3 1 2 2 2':
    case '3 1 1 3 2':
    case '4 1 1 3 0':
    case '4 0 1 3 3':
    case '4 0 1 3 0':
    case '4 0 1 0 3':
    case '4 1 0 3 0':
    case '4 1 0 0 3':
    $('.selection-2').fadeIn('swing');
    $('.selection-1 , .selection-3 , .selection-4' ).hide();
      break;

  // Customer might need chime pro ---------------.

    case '1 1 0 0 0':
    case '1 0 1 0 0':
    case '1 1 1 0 0':
    case '1 0 1 2 2':
    case '1 1 0 2 2':
    case '1 1 0 0 2':
    case '1 1 0 2 0':
    case '1 1 1 0 2':
    case '1 2 1 0 2':
    case '1 1 2 0 2':
    case '1 0 0 0 2':
    case '1 0 0 2 0':

    // -------------------------- DEVICE BREAK
    case '2 1 0 0 0':
    case '2 0 1 0 0':
    case '2 1 1 0 0':
    // -------------------------- DEVICE BREAK
    case '3 1 0 0 0':
    case '3 0 1 0 0':
    case '3 1 1 0 0':
    case '3 1 1 2 2':
    $('.selection-4').fadeIn('swing');
    $('.selection-1 , .selection-2 , .selection-3').hide();
    break;

  // Bad at router - Calling ISP ----------------
    case '1 0 0 1 1':
    case '1 1 1 1 1':
    case '1 1 1 2 1':
    case '1 1 1 3 1':
    case '1 2 1 1 1':
    case '1 1 0 1 0':
    case '1 0 1 1 0':
    case '1 0 0 1 0':
    case '1 1 1 1 0':
    case '1 0 1 0 1':
    case '1 1 0 0 1':
    case '1 0 0 0 1':
    // `````` new stuff `````
    case '1 0 0 2 1':
    case '1 0 0 1 2':
    case '1 1 1 0 1':
    case '1 1 0 1 1':
    case '1 1 2 1 0':
    case '1 2 2 1 0':
    case '1 2 2 1 1':
    case '1 3 2 1 1':
    case '1 3 3 1 1':
    case '1 3 3 2 1':
    case '1 3 3 1 2':
    case '1 3 3 0 1':
    case '1 3 3 1 0':
    case '1 3 0 1 1':
    case '1 0 3 1 1':
    case '1 2 3 1 1':
    case '1 1 3 1 1':
    case '1 1 2 1 1':
    case '1 2 0 0 1':
    case '1 0 2 0 1':
    case '1 2 0 1 0':
    case '1 0 2 1 0':
    // -------------------------- DEVICE BREAK
    case '2 0 0 1 1':
    case '2 1 1 1 1':
    case '2 1 1 2 1':
    case '2 1 1 3 1':
    case '2 2 1 1 1':
    case '2 1 0 1 0':
    case '2 0 1 1 0':
    case '2 0 0 1 0':
    case '2 1 1 1 0':
    case '2 0 1 0 1':
    case '2 1 0 0 1':
    case '2 0 0 0 1':
    // -------------------------- DEVICE BREAK
    case '3 0 0 1 1':
    case '3 1 1 1 1':
    case '3 1 1 2 1':
    case '3 1 1 3 1':
    case '3 2 1 1 1':
    case '3 1 0 1 0':
    case '3 0 1 1 0':
    case '3 0 0 1 0':
    case '3 1 1 1 0':
    case '3 0 1 0 1':
    case '3 1 0 0 1':
    case '3 0 0 0 1':


    $('.selection-3').fadeIn('swing');
    $('.selection-2 , .selection-1 , .selection-4').hide();
      break;


    default:
    // If no match all selections are hidden.
    $('.selection-1 , .selection-2 , .selection-3 , .selection-4 ').hide();


  }
}
