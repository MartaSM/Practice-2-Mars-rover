// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}
// ======================
var roverDirection = rover.direction;
var roverCoord = rover.x;
var roverOrd = rover.y;
var travelLog = rover.travelLog;
var grid = [
  [' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '],
  ['O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'O', ' ', ' ', 'O', 'O', ' ', ' ', ' ', ' '],
  ['O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' '],
  [' ', ' ', 'O', ' ', ' ', ' ', 'O', ' ', ' ', ' '],
];
function turnLeft(rover){
   //rover turns left//
  switch (roverDirection){
    case "N":
      roverDirection = "W"
      break;
    case "W":
      roverDirection = "S"
      break;
    case "S":
      roverDirection = "E"
      break;
    case "E":
      roverDirection = "N"
      break;
    default:
      console.log ("Rover position not found")
      break;
  }
}
function turnRight(rover){
     //rover turns right// 
  switch (roverDirection){
    case "N":
      roverDirection = "E"
      break;
    case "E":
      roverDirection = "S"
      break;
    case "S":
      roverDirection = "W"
      break;
    case "W":
      roverDirection = "N"
      break;
    default:
      console.log ("Rover direction not found")
      break;
  }
}
function moveForward(rover){  
  switch (roverDirection){
    case "N":
    //rover goes up//
      if (roverOrd===0){}
      else{
        roverOrd--;}
      break;
    case "E":
    //rover goes right//
      if (roverCoord===9){}
      else{
        roverCoord++; }
      break;
    case "S":
    //rover goes down//
      if (roverOrd===9){}
      else{
        roverOrd++;}
      break;
    case "W":
    //rover goes left//
      if (roverCoord===0){}
      else{
        roverCoord--;}
      break;
    default:
      console.log("Rover not found");
  }
  }  
  function moveBackwards(rover){  
    switch (roverDirection){
    case "N":
    //rover goes up//
    if (roverOrd===9){
      roverOrd;}
    else{
      roverOrd++;}
    break;
    case "E":
     //rover goes right//
     if (roverCoord===0){}
     else{
     roverCoord--;}
    break;
    case "S":
     //rover goes down//
     if (roverOrd===0){}
     else{
     roverOrd--;}
    break;
    case "W":
     //rover goes left//
     if (roverCoord===9){}
     else{
     roverCoord++;}
    break;
      default:
    console.log("Rover not found");
    }
    }
    function movement(commands){
      //commands is a string//
      for (i=0;i<commands.length;i++){
        var caracter = commands.charAt(i);
        if (caracter ===  "f" ||  caracter === "b" || caracter === "r" || caracter === "l"){
         switch (caracter){
          case "f":
          moveForward()        
          break;
          case "b":
          moveBackwards ()       
          break;
          case "r":
          turnRight()
          break;
          case "l":
          turnLeft()
          break;
      }
          var obstacle = grid [roverOrd][roverCoord];
          if (obstacle === "O"){
            console.log ("Rover stopped because it found an obstacle in the position " + "[" + roverCoord + ", " + roverOrd + "].")
            break;}
          travelLog.push([roverCoord,roverOrd])
      }
        else {
          console.log("The character " + "'" + caracter + "'" + " is invalid. Please, enter any of the following characters: 'f', 'b', 'r' or 'l' ");
          break;
        }
      }
      if (caracter ===  "f" ||  caracter === "b" || caracter === "r" || caracter === "l"){
        console.log ("Rover has been in the following positions:")
        console.log (travelLog); }
      }
        

    