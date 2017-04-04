// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // this.$node = $('<span class="dancer"></span>');
  this.$node = $('<div class="dancer"> <img class="dancer-image"> </div>');
  this.setPosition(top, left);  
};

  makeDancer.prototype.step = function(time) {

    var context = this;
    setTimeout(function(){ 
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

    this.$node.css(styleSettings);
  };


