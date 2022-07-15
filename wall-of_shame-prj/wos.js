$("#aa").hide()
$("#bb").hide()
$("#cc").hide()
$("#First").on("click",function(){ $("#aa").show();
	$("#bb").hide();
	$("#cc").hide();
 });
$("#Second").on("click",function(){ $("#bb").show();
	$("#aa").hide();
	$("#cc").hide(); });
$("#Third").on("click",function(){ $("#cc").show();
	$("#aa").hide();
	$("#bb").hide(); });


