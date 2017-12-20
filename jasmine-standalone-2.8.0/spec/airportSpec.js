
describe("Airport", function() {
  var airport;
  var plane;
  var plane2;
  var weather;

  beforeEach(function () {
    plane = new Plane();
    plane2 = new Plane();
    weather = {
      isStormy: function() {
        return false
      }}
    airport = new Airport(weather);
  });

it("should allow planes to land", function() {
  expect(airport.land(plane)).toEqual(plane)
})

it("should save the plane in a list of planes", function() {
  airport.land(plane)
  expect(airport.planes).toEqual([plane])
})

it("allows specific planes to takeoff", function() {
  airport.land(plane)
  airport.land(plane2)
  airport.takeoff(plane)
  expect(airport.planes).toEqual([plane2])
})

it("planes cannot take off when the weather is stormy", function() {
  airport.weather = {
    isStormy: function() {
      return true
    }}
  airport.land(plane)
  var stormyTakeoff = function() {
  airport.takeoff(plane);
  }
  expect(stormyTakeoff).toThrowError("Too stormy to takeoff!")
})

it("plans cannot land if the airport is full", function() {

  for(i=0;i< 20;i++) {
    airport.land(plane)
    }
    var fullAirport = function () {
      airport.land(plane);
    }
  expect(fullAirport).toThrowError("The airport is full, the plane cannot land")
})

// it("planes cannot land if airport is at max capacity", function() {
//   for(i=0;i<20;i++) {
//     airport.land(plane)
//   }
//   var fullLanding = function() {
//     airport.land(plane);
//   }
//   expect(fullLanding).toThrowError("The airport is full, the plane cannot land")
// })



})
