var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);
};
  
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.step = function(time) {
    // console.log("start of blinky step")
    // counter is here

    var context = this;
    
    setTimeout( function(){
      makeDancer.prototype.step.call(context, time);
    }, time)

    this.$node.toggle();
    // console.log("end of blinky step")
  };

  makeBlinkyDancer.prototype.lineUp = function(obj, move) {
    $(obj).animate( { top: 400, left: move } );
    // var topPos = $(obj).css('top', 150);
    // var leftPos = $(obj).css('left', move);
    // console.log(topPos, leftPos);
  };