$(document).ready(function(){
    
    $("#btn1").click(function() {
      // Fade out the button
      $(this).fadeOut();
      
      // Append new content to the div
      $("#content").append("<p>my name is Rama</p>");
      
      // Fade in the new content
      $("#content").fadeIn();
      
      // Add a class to the new content
      $("#content").addClass("highlight");
      
      // Update the text of the button
      $(this).text("Clicked!");
    });
  });