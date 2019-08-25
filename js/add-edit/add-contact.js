$(document).ready(function()
{
	myLocation = $("li").filter("#contact01").find(".words").find("p").text("Alexandria, Egypt")
	myEmail = $("li").filter("#contact02").find(".words").find("p").text("shriefmohamed@live.com")
	myPhone = $("li").filter("#contact03").find(".words").find("p").text("+2001210325979")
	myFacebook = $("li").filter("#contact04").find(".words").find("p").text("/ShriefMohmd")
	
	
	$("li").filter("#contact01").find(".words").find("p").attr("title",myLocation.text())
	$("li").filter("#contact02").find(".words").find("p").attr("title",myEmail.text())
	$("li").filter("#contact03").find(".words").find("p").attr("title",myPhone.text())
	$("li").filter("#contact04").find(".words").find("p").attr("title",myFacebook.text())
});