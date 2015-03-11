var RyuDancer = function(top, left){
  Dancer.call(this, top, left, 5000);
  var settings = {
    'background-image': "url('ryu.png')",
    border: 'none',
    'border-radius': 'none',
    height: 229,
    width: 144,
    transform: 'rotate(0deg)'
  };
  this.$node.css(settings);
  this.$node.on('mouseover', this.spin);
};

RyuDancer.prototype = Object.create(Dancer.prototype);
RyuDancer.prototype.constructor = RyuDancer;

RyuDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random())
  
  var x1 = this.$node.css('left');
  x1 = +x1.substring(0, x1.length - 2);
  var y1 = this.$node.css('top');
  y1 = +y1.substring(0, y1.length - 2);
  var y2, x2, between;
  
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof RyuDancer){
      continue;
    }
    x2 = window.dancers[i].$node.css('left');
    x2 = +x2.substring(0, x2.length - 2);
    y2 = window.dancers[i].$node.css('top');
    y2 = +y2.substring(0, y2.length - 2);
    between = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
    if (between < 200){
      window.dancers[i].$node.css('height', '200px');
    }
  }
};

RyuDancer.prototype.spin = function(){
  var degree = Math.floor(Math.random() * 360);
  var transformValue = 'rotate(' + degree + 'deg)';
  $(this).css('transform', transformValue);
  return transformValue;
};

RyuDancer.prototype.lineUp = function(){
  this.$node.css('top', 100);
};