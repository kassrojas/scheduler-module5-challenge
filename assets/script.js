// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
  // TODO: Add a listener for click events on the save button. 
  $(saveButton).click(function (){
    var textArea = $(this).siblings().eq(1).val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(textArea, time);
  })


  
  // This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? 05/01/05 How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  //  dayjs().hour(); gets current hour 
  
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
});

function renderLocal(){
  x.children[1].textContent = localStorage.getItem("textArea", textArea);
}