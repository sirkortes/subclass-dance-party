// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

   // console.log('params dancer',top, left, timeBetweenSteps)
  // use jQuery to create an HTML <span> tag
  
  this.$node = $('<span class="dancer"></span>');

  console.log("node at construct", this.$node);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  
  // this.step(timeBetweenSteps);
  
};

  makeDancer.prototype.step = function(time) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var node = this.$node;

    console.log('node',node);

    // var nowtop = node.css('top');
    // var nowleft = node.css('left');
    // node.css({ top: (nowtop+10), left: (nowleft+10) });

    console.log('dancer step', this, this.$node, time);

    var context = this;

    setTimeout(function(){ 
      console.log("time looping")
      context.step(time); 
    }, time);

  };


  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };

    // console.log('dancer setPos', this.$node, top, left);
    this.$node.css(styleSettings);
  };


