



var Business = function(top, left, timeBetweenSteps) {

  makeDancer.call( this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);

  var business = this.$node;

  business.addClass('business');

  // get it's img tag, add data src prop to correct img url

  var img = business.find('.dancer-image');
  img.attr( 'src', "img/dance1.gif" );

};
  

  Business.prototype = Object.create(makeDancer.prototype);
  Business.prototype.constructor = Business;
  Business.prototype.step = function(time) {

    // makeDancer.prototype.step.call(this, time);

    var context = this;
    // for timeout
    setTimeout( function(){
      makeDancer.prototype.step.call(context, time);
    }, time)

    // this is where it toggled / action
  };

  // Business.prototype.lineUp = function(top, left) {
  //   console.log(top, left);
  // }

  // Added this method for lineUp effects -------------------------------
  Business.prototype.lineUp = function(obj, move) {
    console.log(obj)
    $(obj).animate( { top: 450, left: move } );
    // setInterval(function() {
    //   $(obj).animate( { zoom: '300%', top: 75}, "slow" );
    // }, 5000);

    // setInterval(function() {
    //   $(obj).animate( { zoom: '100%', top: 150}, "slow" );
    // }, 10000);
    // var topPos = $(obj).css('top', 150);
    // var leftPos = $(obj).css('left', move);
    // console.log(topPos, leftPos);
  }; // End of lineUp effects method -------------------------------