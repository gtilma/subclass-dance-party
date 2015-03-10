describe("chameleonDancer", function() {

  var chameleonDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    chameleonDancer = new ChameleonDancer(500, 500, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(chameleonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a different color after one second", function(){
    clock.tick(timeBetweenSteps);
    expect(chameleonDancer.$node.css('border-color')).to.not.equal('rgb(255, 0, 0)');
  });
});