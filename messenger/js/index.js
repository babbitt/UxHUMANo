var school;
var room;
$(document).ready(function(){
        $('.harvard').click(har);
        $('.MIT').click(mit);
        $('.texas').click(tex);
        $('.caltech').click(cal);
        $('.start').click(go);
});
function har(){
	school = 'harvard';
	$('#backgrounds').animate({top:'-100%'},500);
};
function mit(){
	school = 'mit';
	$('#backgrounds').animate({top:'-200%'},500);
};
function tex(){
	school = 'tam';
	$('#backgrounds').animate({top:'-300%'},500);
};
function cal(){
	school = 'caltech';
	$('#backgrounds').animate({top:'-400%'},500);
}
function go(){
	window.location = 'book.html?school='+school;
}