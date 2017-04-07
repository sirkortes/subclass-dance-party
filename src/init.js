$(document).ready(function() {
  window.dancers = [];

  // index for dancer pos
  var depthIndex = 0; 

  // to index each dancer
  var children = 0;

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

    var pageHeight = $("body").height() - 400;
    var danceFloorHeight = $("#danceFloor").height();
    var pageWidth = ( $("body").width() ) - 200;

    // alert( "page "+pageHeight +"floor "+ danceFloorHeight +"width "+ pageWidth );

    //  Math.floor(Math.random() * (max - min + 1)) + min;
    var top = limitedTop();
    var left = limitedLeft();
    var time = Math.random() * 1000;

    var dancer = new dancerMakerFunction( top, left, time);
    // increase children var
    children++;
    


    var dude = $(dancer['$node']);

    dude.children('.targetArea').attr('id',children);

    // scale dancer based on top
    // ( call this on each when lining up or changing position )
    scaleDancer(dancer, top);
    

    window.dancers.push(dancer); // Push each dancer to global array
    
    // console.log("POSITION: "+top);
    // modify dancer z-indexes for depth illusion
    
    adjustDancersZindex(dancer, top);

    $('body').append(dancer.$node);



    // COMENTED THE BELOW PART TO GET DANCERS TO LINE UP PROPERLY
    
    // setInterval(function() {

    //   // setTimeout(function() {
    //     $(dude).animate({ left: left-50 }, 550 );
    //   // }, 1000);
    //   setTimeout(function() {
    //     $(dude).animate({ left: left+50 }, 550 );
    //   }, 500); // End of zooming effects -------------------------------------

    // }, 1000)

    // console.log(dancerMakerFunctionName, "on the floor!")
    
    

  });


$(this).on('mouseover', '.carlton', function(event){

    var dancer = $(this)[0];
    $(dancer).animate({ 'margin-top': '-80px'},80, "linear", function(){
      $(dancer).animate({'margin-top': '0px'}), 150, "linear";
    });
});



  

  function scaleDancer(dancer,top){


    var maxTop = 500;
    var scale = 1 - ( (maxTop - top)/500 );
    $(dancer['$node']).css('transform', 'scale('+scale+')');

  }

  // adjust every dancer's z-index upon instantiation
  function adjustDancersZindex(){
      var dancers = window.dancers;
      // always adjust our positions
      dancers.sort(zort).reverse();
      dancers.forEach(function(dancer,index){
        $(dancer['$node']).css('z-index',0+index);
      });
  }

  // greatest to smallest based on dancer.css.top
  function zort(a, b) {
    a = $(a['$node']).css('top');
    b = $(b['$node']).css('top');

    if ( a > b ) {
      return -1;
    }
    if ( a < b ) {
      return 1;
    }
    return 0;
  }

  // limit y position to stay within dance floor
  function limitedTop(){
    var pageHeight = $("body").height() - 400;
    var danceFloorHeight = $("#danceFloor").height();
    var pageWidth = ( $("body").width() ) - 200;
    //  Math.floor(Math.random() * (max - min + 1)) + min;
    var maxH = pageHeight;
    var minH = pageHeight - danceFloorHeight;
    // var top = Math.random() * Math.floor( Math.random() * ( pageHeight - (pageHeight-danceFloorHeight+300) + (pageHeight-danceFloorHeight+300) ) );
    var top = Math.floor(Math.random() * (maxH - minH + 1)) + minH;

    if ( top <= 400 ){ top = 400 ; } // Absolute min
    if ( top >= 525 ){ top = 525  ; } // Absolute max

    return top;
  }

  // limit x position to stay within dancefloor
  function limitedLeft(){

    var pageWidth = $("#danceFloor").width();
    //  Math.floor(Math.random() * (max - min + 1)) + min;
    var left = Math.floor( Math.random() * ( pageWidth ) );

    // var left = Math.floor( Math.random() * ( pageHeight - (pageHeight-danceFloorHeight+300) + (pageHeight-danceFloorHeight+300) ) );
    if ( left <= 80 ){ left = 80; }
    if ( left >= 1080 ){ left = 1080; }

    console.log("left: "+left);
    return left;
  }


  /*
      have a limit to divide in lines after x amount of dancers
  */
  $('.lineUp').on('click', function() {
    var carltonMove = 200;
    var blinkyMove = 800;
    var businessMove = 800;

    // Iterate through window.dancers array
    for (var idx = 0; idx < window.dancers.length; idx++) {
      
      var currentDancer = window.dancers[idx]['$node'];

      scaleDancer(window.dancers[idx], 450);

      var constructorName = window.dancers[idx].constructor.name;

      // console.log('!!!!!!!', constructorName);

      if (constructorName === 'Carlton') {
        Carlton.prototype.lineUp.call(this, currentDancer, carltonMove);
        carltonMove += 75;
      } else if (constructorName === 'makeDancer') {
        makeBlinkyDancer.prototype.lineUp.call(this, currentDancer, blinkyMove);
        blinkyMove += 75;
      } else if (constructorName === 'Business') {
        Business.prototype.lineUp.call(this, currentDancer, businessMove);
        businessMove += 75;
      }

      
    }

  }); // End of lineUp button click function -------------------------------

});


