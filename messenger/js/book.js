var school;
var room;
var request;
$(document).ready(function(){
        school = findschool();
        $('.school').text(school);
        $('#backgrounds').animate({top:'-'+findbg()+'%'},0);
        console.log(school);

        $('.room').click(froom);
});
function findschool(){
    var url = window.location.href; // or  for current url
    var captured = /school=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'none';
    if(result != 'harvard' && result != 'mit' && result != 'tam' && result != 'caltech'){$('body').html('Sorry, an error occured.')};
    if(result == 'harvard'){return 'Harvard'};
    if(result == 'mit'){return 'MIT'};
    if(result == 'tam'){return 'Texas A&M'};
    if(result == 'caltech'){return 'Cal Tech'};
}
function findbg(){
    if(school=='Harvard'){return '0'};
    if(school=='MIT'){return '100'};
    if(school=='Texas A&M'){return '200'};
    if(school=='Cal Tech'){return '300'};
}
function froom(){
    room = $(this).text();
    console.log(room);
    var x = chooseitem();
}
function chooseitem(){
    $.when( $('#content').animate({left:'-1000%'},500) ).then(function() {
   $.when($('#text').html('<h4>Okay room '+room+', What do you need?</h4><h6 class="white">Remember to add locations for your task</h6><textarea class="request"></textarea><br><button onclick="submit()">Get it for me!</button>')).then(function(){
    $('#content').animate({left:'0%'},500)
    });
    });
}
function submit(){
    request = $('.request').val();
    $.when( $('#content').animate({left:'-1000%'},500) ).then(function() {
   $.when($('#text').html('<h4>Okay room '+room+',</h4><h5>Your request to '+request+' has been submitted</h5>')).then(function(){
    $('#content').animate({left:'0%'},500)
    });
    });
}