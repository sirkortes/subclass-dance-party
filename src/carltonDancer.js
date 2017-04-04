var Carlton = function(top, left, timeBetweenSteps) {

  makeDancer.call( this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);

  var carlton = this.$node;

  carlton.addClass('carlton');

  // get it's img tag, add data src prop to correct img url

  var img = carlton.find('.dancer-image');
  img.attr( 'src', "img/dance2.gif" );

};
  
  Carlton.prototype.constructor = Carlton;

  Carlton.prototype = Object.create(makeDancer.prototype);

  Carlton.prototype.step = function(time) {

    // makeDancer.prototype.step.call(this, time);

    var context = this;
    // for timeout
    setTimeout( function(){
      makeDancer.prototype.step.call(context, time);
    }, time)

    // this is where it toggled / action
  };