var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call( this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);
};
  
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.step = function(time) {

    // makeDancer.prototype.step.call(this, time);

    var context = this;
    // for timeout
    setTimeout( function(){
      console.log("Stepping?");
      // makeDancer.prototype.step.bind(context, time);
      makeDancer.prototype.step.call(context, time);
    }, time)

    this.$node.toggle();
  };