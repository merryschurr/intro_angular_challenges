console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)

function infoController(){
  this.name = "Merry Schurr"; // default name
  this.height = 5.5; // default height in feet
}
