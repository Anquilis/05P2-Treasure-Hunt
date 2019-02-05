$("#yes, #no, #yes2, #no2, h6, #treasure, #missing, #snap, .buttonContainer2, .buttonContainer3, #reset").hide();

$("#sells").click(function(){
    $("h1, img, p, button").hide();
    $("body").css("background-image","url(https://pbs.twimg.com/profile_images/753592585537540097/RMSeYbRD_400x400.jpg)");
});

$("h1").mouseenter(function(){
    $("h1").text("== EA Treasure Buy ==");
    $("h6").show();
});

$("h1").mouseleave(function(){
    $("h1").text("== EA Treasure Hunt ==");
    $("h6").hide();
});

$("#click").click(function(){
    $("#click").hide();
    $("#yes, #no").show();
    $("#response").text("You haven't purchased the MAP DLC yet. Please purchase the MAP DLC to continue.");    
    $("#yes").text("= Purchase MAP DLC =");
    $("#no").text("= No u =");
});

$("#no").dblclick(function(){
    $("body").css("background-color","black");
    $("body").html("<img src=https://i1.wp.com/futhdhub.com/wp-content/uploads/2017/09/IconFIFAPoint-1.png>");
    $("h1, #response, .buttonContainer").hide();
});

$("#no2").mouseenter(function(){
    $("#no2").hide();
    $("#response").text("DON'T. MAKE. US. BUY. YOU.");
});

$("#yes").click(function(){
    $("#response").text("Find the right path to reach the treasure!");
    $("#yes, #no").hide();
    $(".buttonContainer2").show();
});

$("#rightPath").click(function(){
    $(".buttonContainer2").hide();
    $(".buttonContainer3").show();
});

$("#rightPath2").click(function(){
    $("#yes2, #no2").show();
    $("#missing").slideDown();
    $(".buttonContainer3").hide();
    $("#response").text("You found the treasure, but it looks like you haven't purchased the IMAGE PACK 2 yet. Please purchase the IMAGE PACK 2 to fully immerse yourself in the game.");
    $("#yes2").text("= Purchase IMAGE PACK 2 =");
    $("#no2").text("= Cancel =");
});

$("#wrongPath, #wrongPath2, #wrongPath3, #wrongPath4").click(function(){
    $("body").css("background-color","black");
    $("#response, .buttonContainer2, .buttonContainer3, #sells, h1").hide();
    $("body").html("<img src=https://preview.redd.it/r9ezu2qg5m901.jpg?width=575&auto=webp&s=7c885b3269e5d06c5e125da654e331c2239d81b3>");
});

$("#yes2").click(function(){
    $("#treasure").fadeIn();
    $("h1, #sells, #missing, #response, .buttonContainer").hide();
});

$("#treasure").mouseenter(function(){
    $("#response").show();
    $("#response").text("Purchase the FULL GAME to open your treasure. Keep on hunting!");
    $("#snap, #reset, #endGame").show();
});

$("#snap").click(function(){
    $("#snap, h1, #sells, #treasure, #response").hide();
    $("body").html("<img src=https://media.giphy.com/media/5eFp76zhsq3uw/giphy.gif>");
});

$("#reset").click(function(){
    $("h1, #click, .buttonContainer, #sells").show();
    $(".endGame, #treasure, #yes, #no, #yes2, #no2").hide();
    $("body").css("background-color","white");
});
