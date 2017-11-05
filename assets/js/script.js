/* Check off specific todos by clicking*/
$("ul").on("click", "li", function() {
	$(this).toggleClass("crossedOut");
});

/*Click on X to delete todo*/
$("ul").on("click", "span", function(event) {
	$(this).parent().addClass("crossedOut");
	$(this).parent().fadeOut(600, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

/*Adding a todo*/
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		/*Grabbing new todo from input*/
		var newTodo = $(this).val();
		/*Adding new li to ul*/
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newTodo +"</li>")
		/*Clear input*/
		$(this).val("");
	}
});

$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle(300);
});