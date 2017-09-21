'use strict';

function Robot() {
  // implement your solution here!
  var directions = ['north','east','south','west']

  this.bearing = "north"
  this.coordinates = [3,8]

  this.orient = (currentDirection) => {
    if (directions.includes(currentDirection)) {
      this.bearing = currentDirection
    } else {
      throw new Error("Invalid Robot Bearing")
      }
  }

  this.turnRight = () => {
    var index = directions.findIndex((d) => d === this.bearing)
    this.orient(directions[(index + 1) % 4])
  }

  this.turnLeft = () => {
    var index = directions.findIndex((d) => d === this.bearing)
    this.orient(directions[(index + 3) % 4])
  }

  this.at = (x,y) => {
    this.coordinates = [x,y]
  }

  this.advance = () => {
    if (this.bearing === "north") {
      this.coordinates[1]++
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    }
  }

  this.instructions = (instruction) => {
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
  }

  this.place = (obj) => {
    this.at(obj["x"], obj["y"])
    this.bearing = obj["direction"]
  }

  this.evaluate = (instruction) => {
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
  }

};
