$(function() {
  $('#users_select').multiselect({
    includeSelectAllOption: true,
    enableFiltering:true,
    nonSelectedText :'Select Attendees'
  });

  $('#datetimepicker_start').datetimepicker({
    format:'d-m-Y / H:i',
    minDate: '0',
    step: 15
  });

  $('#datetimepicker_end').datetimepicker({
    format:'d-m-Y / H:i',
    minDate: '0',
    step: 15
  });
});


setTimeout(function() {
  $('.fade_alerts').hide('slow');
}, 5000);


// $(document).ready( function () {
//   $('#upcoming_table').DataTable({
//       "bSort" : false
//   });
//   $('#todays_table').DataTable({
//       "bSort" : false
//   });
//   $('#complete_table').DataTable({
//       "bSort" : false
//   });
// });


$(document).ready(function () {
  var element = $('#calendar');
  element.fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'resourceDay'
    },
    defaultView: 'resourceDay',
    editable: false,
    droppable: false,
    resources:  "/bookings/meating_rooms",
    events: "/bookings/list",
    timezone: 'UTC',
    selectable: true,
    selectHelper: true,
    allDaySlot: false
    // eventClick: function (event) {
    //   console.log(event);
    // }
  });
});
