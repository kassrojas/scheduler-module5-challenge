
renderLocal();


$(function timeColorChange (){

  var currentHour = dayjs().hour();

  $('.description').each(function () {

    $(this).parent().removeClass('past present future');

    var timeBlock = parseInt($(this).parent().attr('id').replace('hour-', ''));

    if (timeBlock < currentHour){
      $(this).addClass('past');
    } else if (timeBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

  });
   
  $('.saveBtn').click(function (){
    var textArea = $(this).siblings().eq(1).val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(textArea, time);
  })


});

function renderLocal(){
   for (var i = 9; i <= 17; i++){
    $("#hour-" + i).children('description').val(localStorage.getItem('hour-' + i));
   }
}