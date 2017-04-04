var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);
};
  
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.step = function(time) {
    console.log("start of blinky step")
    // counter is here

    var context = this;
    
    setTimeout( function(){
      makeDancer.prototype.step.call(context, time);
    }, time)

    this.$node.toggle();
    console.log("end of blinky step")
  };