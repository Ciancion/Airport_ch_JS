describe("Plane", function(){
  var plane

  beforeEach(function() {
    plane = new Plane();
  })
  it("should be flying when it is taken off", function() {
    plane.takeoff()
    expect(plane.isFlying).toBeTruthy()
  })

  it("should not be flying when it is landed", function() {
    plane.takeoff()
    plane.land()
    expect(plane.isFlying).toBeFalsy()
  })
})
