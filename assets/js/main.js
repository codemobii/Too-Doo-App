function disableSelection(target){
if (typeof target.onselectstart!="undefined") //For IE
    target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") //For Firefox
    target.style.MozUserSelect="none"
else //All other route (For Opera)
    target.onmousedown=function(){return false}
target.style.cursor = "default"
}
$('.todo_list li').append('<span class="toggle_done"><svg class="done_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg></span>');

$('.list').on('dblclick', function() {
    $(this).toggleClass('done_list');
    $(this).removeClass('pinned');
});

$('.list').on('click', function() {
    $(this).toggleClass('pin_ready');
});

$(document).on('click','.delete',function() {
    $('.done_list').remove();
});

$(document).on('click','.pin',function() {
    $('.pin_ready').addClass('pinned').prependTo($('li').parent());
    $('.list').removeClass('pin_ready');
});

$(document).on('click','.add_btn',function() {
    $('.add_btn svg').toggleClass('open');
});
