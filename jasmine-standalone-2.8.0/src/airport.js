MAX_CAPACITY = 20

function Airport(weather = new Weather(), capacity = MAX_CAPACITY) {
  this.planes = []
  this.weather = weather
  this.max_capacity = capacity
}


 Airport.prototype.land = function(plane) {
   if (this.max_capacity <= this.planes.length)
     throw new Error("The airport is full, the plane cannot land")
   this.planes.push(plane)
   plane.land
   return plane
 }

Airport.prototype.takeoff = function(plane) {
  if (this.weather.isStormy())
    throw new Error("Too stormy to takeoff!")
  this.planes.pop(plane)
}
