function Plane() {
  this.isFlying = false
}
Plane.prototype.land = function(){
  this.isFlying = false
}
Plane.prototype.takeoff = function(){
  this.isFlying = true
}
