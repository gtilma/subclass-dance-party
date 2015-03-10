$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  function(){
    var y1, x1, y2, x2, between;
    for (var i = 0; i < window.dancers.length - 1; i++) {
      x1 = window.dancers[i].$node.css('left')
      x1 = +x1.substring(0, x1.length - 2)
      y1 = window.dancers[i].$node.css('top')
      y1 = +y1.substring(0, y1.length - 2)
      x2 = window.dancers[i + 1].$node.css('left')
      x2 = +x2.substring(0, x2.length - 2)
      y2 = window.dancers[i + 1].$node.css('top')
      y2 = +y2.substring(0, y2.length - 2)
      between = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))
      // if between matches some condition, do something crazy
    }
  }();
});

