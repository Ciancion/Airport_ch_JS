function Weather() {
}

Weather.prototype.isStormy = function() {
  return Math.random(100) > 80
}
