$(document).ready(function(){
var xy = 16;
var grid = xy*xy;
var hw = 500/16;
hw = parseInt(hw);

hw=hw-2;

var padding = (500%xy)/2;
padding = parseInt(padding, 10);
       var width = 500-padding*2;
	   for(var a=1;a<xy+1;a++){
	   for(var i=1;i<xy+1;i++){
		$('#container').append('<div class="pixel"></div>');
			};
		};	
	$('.pixel').css('width', hw + "px");
	$('.pixel').css('height', hw + "px");
	$('#container').css('padding', padding +"px");
	 $('#container').css('width', width +"px");
	 $('#container').css('height', width +"px");
	$('.pixel').mouseenter(function(){
 	$(this).addClass('black');
});
$("#new").click(function(e){
	e.preventDefault();
	
    xy=prompt ('I need a new number of pixels');
	xy=parseInt(xy, 10);
    hw=500/xy;
    hw=parseInt(hw, 10)-2;
    padding = (500%xy)/2;
    padding = parseInt(padding, 10);
    var width = 500-padding*2;
$('#middle').animate({left: '49%'},100);
$('#middle').animate({left: '51%'},100);
$('#middle').animate({left: '49%'},100);
$('#middle').animate({left: '51%'},100);
$('#middle').animate({left: '50%'},100);
$('#container').empty();
	for(var a=1;a<xy+1;a++){
	   for(var i=1;i<xy+1;i++){
			$('#container').append('<div class="pixel"></div>');
		};
		$('.pixel').css('width', hw + "px");
		$('.pixel').css('height', hw + "px");
		$('#container').css('padding', padding +"px");
	 	$('#container').css('width', width +"px");
	 	$('#container').css('height', width +"px");
	};	
	$('.pixel').mouseenter(function(){
		$(this).addClass('black');
 		});
});
$("#Fade").click(function(e){
	e.preventDefault();
	xy=prompt ('I need a new number of pixels');
	xy=parseInt(xy, 10);
    hw=500/xy;
    hw=parseInt(hw, 10)-2;
    padding = (500%xy)/2;
    padding = parseInt(padding, 10);
    var width = 500-padding*2;
$('#middle').animate({left: '49%'},100);
$('#middle').animate({left: '51%'},100);
$('#middle').animate({left: '49%'},100);
$('#middle').animate({left: '51%'},100);
$('#middle').animate({left: '50%'},100);
$('#container').empty();
	for(var a=1;a<xy+1;a++){
	   for(var i=1;i<xy+1;i++){
			$('#container').append('<div class="pixel"></div>');
		};
		$('.pixel').css('width', hw + "px");
		$('.pixel').css('height', hw + "px");
		$('#container').css('padding', padding +"px");
	 	$('#container').css('width', width +"px");
	 	$('#container').css('height', width +"px");
	};	
	$('.pixel').mouseenter(function(){
		var c = $(this).css('background-color');
		
		if (c !== 'rgba(0, 0, 0, 0)'){
		var rgb = c.match(/\d+/g);
		var r=rgb[0]-25;
		var g=rgb[1]-25;
		var b=rgb[2]-25;
		if (r<0){r=0;}
		if (g<0){g=0;}
		if (b<0){b=0;}
		$(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b +')');
	        
	}
	else {
		color = Math.floor(Math.random()*16777215).toString(16);
		$(this).css('background-color', '#'+color);
	};
 		
	});
});
});
