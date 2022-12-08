renderLocal();

$(function timeColorChange (){
  
  $('.description').each(function () {
    $(this).parent().removeClass('past present future');
    
    // gives us just the number in id
    var timeBlock = parseInt($(this).parent().attr('id').replace('hour-', '')); 
    var currentHour = dayjs().hour();
    
    if (timeBlock < currentHour){
      $(this).addClass('past');
    } else if (timeBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    } 
  });
  
  //upon clicking .saveBtn, val() passed into localStorage
  $('.saveBtn').click(function (){
    var textArea = $(this).siblings().eq(1).val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem('hour-' + time, textArea);
  })
  
});

function renderLocal(){
  for (var i = 9; i <= 17; i++){
    $("#hour-" + i).children('.description').val(localStorage.getItem('hour-' + i));
  }
};