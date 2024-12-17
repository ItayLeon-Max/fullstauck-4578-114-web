$(() => {

$('#button1').css('background-color', 'red');

$('#button1').click(function(){
    $(this).css('background-color', 'green');
    $(this).text('Clicked');
    $(this).fadeOut(2000).fadeIn(2000);
    $(this).addClass('btn btn-primary');
    $('div').each(function(){
      $(this).css('background-color', 'yellow');
    })

    $.getJSON({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      success: function(data){
        console.log(data);
      },
      error: function(error){
        console.log(error);
      }
    })
});
})