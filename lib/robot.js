'use strict';

function Robot() {
  // implement your solution here!
  this.directions = ['north','east','south','west']
  this.bearing = "north"
  this.coordinates = [3,8]

};

Robot.prototype.orient = function(currentDirection) {
  if (this.directions.includes(currentDirection)) {
    this.bearing = currentDirection
  } else {
    throw new Error("Invalid Robot Bearing")
    }
};

Robot.prototype.turnRight = function() {
  var index = this.directions.findIndex((d) => d === this.bearing)
  this.orient(this.directions[(index + 1) % 4])
};

Robot.prototype.turnLeft = function() {
  var index = this.directions.findIndex((d) => d === this.bearing)
  this.orient(this.directions[(index + 3) % 4])
};

Robot.prototype.at = function(x,y) {
  this.coordinates = [x,y]
};

Robot.prototype.advance = function() {
  if (this.bearing === "north") {
    this.coordinates[1]++
  } else if (this.bearing === "south") {
    this.coordinates[1]--
  } else if (this.bearing === "east") {
    this.coordinates[0]++
  } else if (this.bearing === "west") {
    this.coordinates[0]--
  }
};

Robot.prototype.instructions = function(instruction) {
  let steps = instruction.split("")
  return steps.map((step) => {
    if (step === "R") {
      return "turnRight"
    } else if (step === "L") {
      return "turnLeft"
    } else if (step === "A") {
      return "advance"
    }
  })
};

Robot.prototype.place = function(obj) {
  this.at(obj["x"], obj["y"])
  this.bearing = obj["direction"]
};

Robot.prototype.evaluate = function(instruction) {
  var steps =  this.instructions(instruction)
  steps.forEach(step => {
    if (step === "turnRight") {
      this.turnRight()
    } else if (step === "turnLeft") {
      this.turnLeft()
    } else if (step === "advance") {
      this.advance()
    }
  })
};
