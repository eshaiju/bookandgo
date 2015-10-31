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
    timezone: 'local',
    selectable: true,
    selectHelper: true,
    allDaySlot: false,
    eventOverlap: false,
    // selectOverlap:false,
    select: function(start, end, jsEvent, view, resources) {
      setStartAndEndDate(start, end);
      $('#rooms_select_model').val(resources);
      if($('.cancel_booking_btn').length > 0)
      {
        $('.cancel_booking_btn' ).replaceWith( "<input type='submit' name='commit' value='Book The Room' id='book_room' class='btn btn-danger book_room_btn' data-disable-with='Checking Availabilty..'>" );
      }
      $('#myModal').modal('show');
    },
    eventClick: function(calEvent, jsEvent, view) {
        // change the border color just for fun
      if($('#current_user_id').val()== calEvent.user_id)
      {
        setStartAndEndDate(calEvent.start, calEvent.end);
        $('#rooms_select_model').val(calEvent.resources);
        $('#agenda_model').val(calEvent.agenda);
        $('.book_room_btn' ).replaceWith( "<a data-confirm='Are you sure?'' class='btn btn-danger cancel_booking_btn' rel='nofollow' data-method='delete' href='/bookings/"+calEvent.id+"'>Cancel Booking</a>" );
        $('#myModal').modal('show');
      }
    }
  });
});

function setStartAndEndDate(start,end){
  $('#datetimepicker_start_model').datetimepicker({
    format:'d-m-Y / H:i',
    minDate: '0',
    step: 15,
    value: new Date(start)
  })

  $('#datetimepicker_end_model').datetimepicker({
    format:'d-m-Y / H:i',
    minDate: '0',
    step: 15,
    value: new Date(end)
  })
}
