
var deck = [];
var suits = ["clubs", "diamonds", "spades", "hearts"];
var nums = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king",]
$(document).ready(function() {
  suits.forEach(function(suit) {
    nums.forEach(function(num) {
      $("#deck").append("<li>" + num + " of " + suit + "</li>");
    });

  });
});
