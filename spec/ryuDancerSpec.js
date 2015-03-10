describe("ryuDancer", function() {
  var ryuDancer;
  var timeBetweenSteps = 5000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ryuDancer = new RyuDancer(500, 500, timeBetweenSteps);
  });  

  it("should ______", function(){
    expect(ryuDancer_____).to._____;
  });

  it("should ______", function(){
    expect(ryuDancer_____).to._____;
  });
  
  it("should ______", function(){
    expect(ryuDancer_____).to._____;
  });
});