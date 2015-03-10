var RyuDancer = function(top, left){
  Dancer.call(this, top, left, 5000);
  var settings = {
    'background-image': "url('ryu.png')",
    border: 'none',
    'border-radius': 'none',
    height: 229,
    width: 144
  };
  this.$node.css(settings);
  this.$node.addClass('ryu');
  $('.ryu').on('mouseover', this.spin);
};

RyuDancer.prototype = Object.create(Dancer.prototype);
RyuDancer.prototype.constructor = RyuDancer;

RyuDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  Dancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random())
};

RyuDancer.prototype.spin = function(){
  $(this).css('transform', 'rotate(180deg)');
}
