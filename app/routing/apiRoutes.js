var express = require("express");
var path = require("path");
//importing data from friendData array in friends.js
var friendData = require("../data/friends.js");

//routes
module.exports = function(app) {

  //when route is /api/friends, return friendData for display
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // listen for post request
  app.post("/api/newFriends", function(req, res) {
    //getting info from user input
    var newFriend = req.body;
    var friendScores = [];
    var friendMatch;
    //test
    console.log(req.body);
    //loop through current friendsList in friends.js
    for (var i = 0; i < friendData.length; i++) {
      //create variables to hold the scores while iterating through
      var currentDataScore = data[i].scores;
      var newFriendScore = newFriend.scores;
      var scoreDiff = [];
      var totalDiffernece = 0;
      //loop comparing the user score & friendData scores when iterating through the friendsList data
      for (var j = 0; j < currentDataScore.length; j++) {
        var num1 = parseInt(currentDataScore[j]);
        var num2 = parseInt(friendScores[j]);
        //to prevent negative numbers this compares the numbers both ways then pushes the difference into scoreDiff array
        if (num1 < num2 || num1 === num2) {
          var diff = num2 - num1;
          scoreDiff.push(diff);
        }
        else if (num2 < num1) {
          var diff = num1 - num2;
          scoreDiff.push(diff);
        }
      }
      //while still looping through the friendsList, loops through the scoreDiff array and calculates total difference
      for (var k = 0; k < scoreDiff.length; k++) {
        totalDiffernece += scoreDiff[k];
      }
      //Adds that totalDifference to an array
      friendScores.push(totalDiffernece);
    }
    //Finds the lowest differnece in the friendScores array
    var fScore = Math.min.apply(Math, friendScores);
    //loops through friendScores
    for (var l = 0; l < friendScores.length; l++) {
      if (friendScores[l] === fScore) {
        //create a match at that index
        match = data[l];
        //sends the match out
        res.send(match);
        data.push(newFriend);
      }
      // //statement if there are no scores that match, find the closest score
      // else if (friendScores[l] *HOW DO I COMPARE NUMBERS BY A RANGE OF SAY 2* fScore) {
      //   //creates a close match at that index
      //   closeMatch = data[l];
      //   //sends the close match out
      //   res.send(closeMatch);
      //   data.push(newFriend);
      // }
    }
  });
};
