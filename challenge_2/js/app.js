console.log('challenge #2 -- app.js loaded!');

// var app = angular.module("appTwo", []);
var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController, ClassController");

$scope.shout = "Merry Schurr!"

function WelcomeController(){
  this.full_name = "Merry Schurr";
  this.age = "32";
  this.city = "Denver";
  this.state = "Colorado";
  this.letters_name = "5"; // change me
}

function ClassController(){
  this.class_name = "Something really long";
  this.enrolled_students = "10";
  this.start_date = "10/31/16";
  this.end_date = "02/02/16"; // change me
}
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Merry Schurr"
}
