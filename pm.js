$(function(){
  var deleteBtn = `<button type="button" title="Delete this!">✖</button>`;
  $('.grid li').append(deleteBtn);
  $('.grid li > button').click(function(){
    $(this).parent('li').fadeOut(200);
  });
});
