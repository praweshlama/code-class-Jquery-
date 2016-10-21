$(document).ready(function(){

  $('.button').click(function(){

  // when i cick the button, I will test each circle in order
  // to see what class they have
  // if it has the class big-green, I will remove the class big-green and ad the class small-red
  // otherwise, i will remove the class small-red and add the class big green

  $('.circle').each(function(){
    
    if ($(this).hasClass('big-green')){

    $(this).removeClass('big-green').addClass('small-red');

  } else {
    $(this).removeClass('small-red').addClass('big-green');
  }

});

});
});
