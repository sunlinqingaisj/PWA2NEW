// JavaScript Document

(function($){  //10. Explain why this is used instead of a document ready function. Comment your answer out on line 4.
//Self excecuting function to runt he jquery. Runs everything inside inbetween line 3 and 28. It's the shorthand version. It's the global selector for jquery. Without the dollar sign it would be for javascript.

//4. Add the jQuery function-select the h2 of this simple web page.
$("h2");


//5. Selectors using IDS
$("#hlisting america").fadeIn(400);

//6. Selectors using Classes
$(".hlisting amerca");

//7. Manipulator
var message = "<span>1-555-Tibbles</span>";

//8. Manipulator-Before
$(".buy").before(message);

//9. CSS Method - Complete this line
 $(".trip").on("mouseenter", function() {
    $(this).css("background", "#252b30");
  });

})(jQuery) //Closes main tag