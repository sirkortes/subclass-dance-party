$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction( $("body").height() * Math.random(), 
                                   $("body").width() * Math.random(), 
                                   Math.random() * 1000 );
    window.dancers.push(dancer); // Push each dancer to global array
    

    $('body').append(dancer.$node);

    // // Added this portion for zooming effects -------------------------------
    // setInterval(function() {
    //   $(dancer['$node']).animate( { zoom: '300%', top: 0, left: 0}, "slow" );
    // }, 20000);
    // setInterval(function() {
    //   $(dancer['$node']).animate( { zoom: '100%', top: 150, left: 0}, "slow" );
    // }, 8000); // End of zooming effects -------------------------------------
    
    // console.log(dancerMakerFunctionName, "on the floor!")
  });

  // Added this portion for lineUp effects -------------------------------
  $('.lineUp').on('click', function() {
    var carltonMove = 0;
    var blinkyMove = 800;

    // Iterate through window.dancers array
    for (var idx = 0; idx < window.dancers.length; idx++) {
      var currentDancer = window.dancers[idx]['$node'];
      var constructorName = window.dancers[idx].constructor.name;
      console.log(constructorName)
      // console.log(window.dancers[idx]);
      // console.log(constructorName);
      // console.log(myInstance.constructor.name === "MyClass");
      if (constructorName === 'Carlton') {
        Carlton.prototype.lineUp.call(this, currentDancer, carltonMove);
        carltonMove += 75;
      } else {
        makeBlinkyDancer.prototype.lineUp.call(this, currentDancer, blinkyMove);
        blinkyMove += 75;
      }

      
    }

  }); // End of lineUp button click function -------------------------------

});


