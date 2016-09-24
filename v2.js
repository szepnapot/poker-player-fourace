var prepare_bet = function(hand, player_num, check_amount, community_cards) {
    var cards = { "2" : 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8" : 8, "9" : 9, "10" : 10, "J" : 11, "Q": 12, "K": 13, "A": 14};
    var goodStartingHand = ["10", "A", "J", "Q", "K"];
    var max = cards[hand[0]] > cards[hand[1]] ? cards[hand[0]] : cards[hand[1]];
    console.log("PREPARE BET FUNCTION =========");
    var handDifference = Math.abs(cards[hand[0]] - cards[hand[1]]);
    var hasHighCard = goodStartingHand.indexOf(hand[0]) > -1 || goodStartingHand.indexOf(hand[1]) > -1;
    var hasPair = hand[0] === hand[1];
    var communityRanks = community_cards.forEach(function(card){console.log(card.rank);return card.rank});
    console.log("HIGH CARD: " + max);
    console.log("HAND DIFFERENCE: " + handDifference);
    console.log("COMMUNITY CARDS: " + community_cards);
    console.log("COMMUNITY RANKS: " + communityRanks);
    // 0. TURN
    if(community_cards.length === 0 || community_cards.length === 'undefined'){
      console.log("TURN 0");
      if (handDifference > 4 && !hasHighCard) {
        return 0;
      } else {
        if(hasPair){
          return check_amount * 2;
        }
        else {
          return check_amount;
        }
      }
    } else {
      console.log("FLOP");
      if(communityRanks.indexOf(hand[0]) > -1 || communityRanks.indexOf(hand[1]) > -1){
        return 6000;
      }
      else {
        return check_amount;
      }
    }
};
