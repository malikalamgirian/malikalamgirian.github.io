$(document).ready(function(){


            // when clicking light mode button
            $( "#lightModeBtn" ).click(function() {
              $('#accessibilityStyleSheet').attr("href", "res/css/day.css");
            });


            // when clicking dark mode button
            $( "#darkModeBtn" ).click(function() {
              $('#accessibilityStyleSheet').attr("href", "res/css/night.css");
            });


});
