$(function () {
    $.fn.addMenu = function () {
        var menuValue = $('footer input').val();
        if (menuValue === '') {
            alert("You must write something!");
        } else {
            $('.grid ul').append('<li>'+menuValue+deleteBtn+'</li>');
        }
    };
    var deleteBtn = `<button class="btn-del" title="Delete this!">x</button>`;
    $('.grid li').append(deleteBtn);
    $('.btn-del').click(function () {
        $(this).parent('li').fadeOut(200);
    });
    $('footer button').click(function() {
        $.fn.addMenu();
    });
    //todo: Delete menu button not works in added item.
});
