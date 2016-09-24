
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {

    console.log("------------------------------------------ BET REQUEST START LOG");
    var community_cards = [];
    if (game_state.community_cards !== 'undefined') {
      community_cards = game_state.community_cards;
    }
    console.log("COMMUNITY:: " + community_cards);
    var number_of_active_players = function(players) {
      var num_of_players = 0;
      for (var i = 0; i < players.length; i++) {
        if(players[i].status != "out") {
          num_of_players++;
        }
      }
      return num_of_players;
    };

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

    var check_amount = game_state.current_buy_in - game_state.players[0].bet;

    var hand = [];
    var player = game_state.players[0];
    try{
      hand.push(player.hole_cards[0].rank);
      hand.push(player.hole_cards[1].rank);
    } catch(ex){
      console.log(ex);
    }
    console.log("========================== OWN HAND");
    console.log(hand);

    var player_count = number_of_active_players(game_state.players);
    console.log("========================== NUMBER OF ACTIVE PLAYERS");
    console.log(player_count);

    var actual_bet = prepare_bet(hand, player_count, check_amount);
    console.log("###################### ACTUAL BET");
    console.log(actual_bet);
    bet(actual_bet);
    console.log( 'WWWWWWWWWWWWWWWWWWWWWWWWW game state + bet' );
    console.log( game_state );

    console.log("------------------------------------------ BET REQUEST END LOG");

  },

  showdown: function(game_state) {
    if (game_state.players[0].status != "out") {
      console.log("========================== SHOWDOWN");
      console.log(game_state);
      // console.log("========================== OWN HAND");
      // console.log(game_state.players[0].hole_cards[0].rank);
      // console.log(game_state.players[0].hole_cards[1].rank);
      console.log("========================== OPPONENT CARDS IN LAST TURN");
      for(var i =0; i < game_state.players.length; i++) {
        if (game_state.players[i].status != "out") {
          console.log(game_state.players[i].name);
          // console.log(game_state.players[i].hole_cards[0].rank + " " + game_state.players[i].hole_cards[1].rank);
          console.log(game_state.players[i].stack);
        }
      }
    }
}


};
