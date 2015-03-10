describe("ryuDancer", function() {
  var ryuDancer;
  var timeBetweenSteps = 5000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ryuDancer = new RyuDancer(500, 500, timeBetweenSteps);
  });  

  it("should have a jQuery $node object", function(){
    expect(ryuDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should move every 5 seconds", function(){
    var left = ryuDancer.$node.css('left');
    ryuDancer.step();
    expect(ryuDancer.$node.css('left')).to.not.equal(left);
  });
  
  it("should spin on mouseover", function(){
    expect(ryuDancer.$node.css('transform')).to.not.equal('rotate(180deg)');
    // mouseover
    expect(ryuDancer.$node.css('transform')).to.equal('rotate(180deg)');
  });
});