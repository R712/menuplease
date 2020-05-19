$(function(){
  var deleteBtn = `<button type="button" title="Delete this!">✖</button>`;
  $('.grid li').append(deleteBtn);
  $('.grid li > button').click(function(){
    $(this).parent('li').fadeOut(200);
  });
  function addMenu() {
    var menuItem = `<li></li>`
    var menuValue = $('form input').val();
    if (menuValue === '') {
      alert("You must write something!");
    } else {
      $('.grid ul').appendChild(menuItem).html(menuValue);
    }
  }
});
