var ChameleonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ChameleonDancer.prototype = Object.create(Dancer.prototype);
ChameleonDancer.prototype.constructor = ChameleonDancer;

ChameleonDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('border-color', this.getColor());
};
ChameleonDancer.prototype.getColor = function(){
  var hexArray = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  var color = '#';
  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 15);
    color += hexArray[index];
  }
  return color;
};

ChameleonDancer.prototype.lineUp = function(){
  this.$node.css('top', 600);
};