$(document).on('click','.add_btn',function() {
    $('.add_btn svg').toggleClass('open');
    $('.add_list').toggleClass('open');
});


$(document).ready(function () {

	$('.todo_list').html(localStorage.getItem('listItems'));

	$('.add_list').submit(function(event)
	{
		event.preventDefault();

		var item = $('#todo-list-item').val();

		if(item)
		{
			$('.todo_list').append("<li class='list'>" + item + "</li>");

            $('.todo_list li').append('<span class="toggle_done"><svg class="done_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg></span>');

			localStorage.setItem('listItems', $('.todo_list').html());

			$('#todo-list-item').val("");
		}

	});

    $(document).on('dblclick', '.list', function() {

        $(this).toggleClass('done_list');

        $(this).removeClass('pinned');

		localStorage.setItem('listItems', $('.todo_list').html());

    });

    $(document).on('click', '.list', function() {

        $(this).toggleClass('pin_ready');

    });

    $(document).on('click','.pin',function() {

        $('.pin_ready').addClass('pinned').prependTo($('li').parent());

        $('.list').removeClass('pin_ready');

		localStorage.setItem('listItems', $('.todo_list').html());

    });

    $(document).on('click','.delete',function() {

        $('.pin_ready').remove();

		localStorage.setItem('listItems', $('.todo_list').html());

    });

});
