var RyuDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

RyuDancer.prototype = Object.create(Dancer.prototype);
RyuDancer.prototype.constructor = RyuDancer;

RyuDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('background-image');
};
