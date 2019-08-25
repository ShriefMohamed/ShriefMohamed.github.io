$(document).ready(function()
{
	var myName = $("div").filter(".words-right").find("h3").text("shrief mohamed")
	
	var myJob = $("div").filter(".words-right").find("p").text("web developer")	
	
	myName.text( myName.text().substring(0,20) )
	
	$("div").filter(".words-right").find("h3").attr("title","shrief mohamed")
	
	myJob.text( myJob.text().substring(0,26) )
	
	$("div").filter(".words-right").find("p").attr("title","web developer") 
});