
module.exports = {

  VERSION: "Default JavaScript folding player",

  prepare_bet: function() {
    var cards = { "2" : 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8" : 8, "9" : 9, "10" : 10, "J" : 11, "Q": 12, "K": 13, "A": 14};
    console.log("tttTTTTTTTTTTTTTTTTTTTTTTTTTT");
    console.log(cards["3"]);
  },

  bet_request: function(game_state, bet) {
    var hand;
    var in_action = game_state.in_action;
    var hand = [];
    var goodStartingHand = ['10', 'J', 'K', 'Q', 'A'];
    var in_action = game_state[in_action];
    hand.push(game_state.players[0].hole_cards[0].rank);
    hand.push(game_state.players[0].hole_cards[1].rank);
    console.log(hand);
    if (goodStartingHand.indexOf(hand[0]) > -1 || goodStartingHand.indexOf(hand[1]) > -1) {
      console.log("###################### ALL IN");
      bet(6000);
    } else {
      console.log("######################## BET");
      bet(500);
    }
    console.log( 'game state + bet' );
    console.log( game_state );
    console.log( bet );
  },

  showdown: function(game_state) {
    console.log("========================== SHOWDOWN");
    console.log(game_state);
    console.log("========================== OWN HANDS");
    console.log(game_state.players[0].hole_cards[0].rank);
    console.log(game_state.players[0].hole_cards[1].rank);


    console.log("========================== OPPONENT CARDS IN LAST TURN");
    for(var i =0; i < game_state.players.length; i++) {
      if (game_state.players[i].status == "active") {
        console.log(game_state.players[i].name);
        console.log(game_state.players[i].hole_cards[0].rank + " " + game_state.players[i].hole_cards[1].rank);
        console.log(game_state.players[i].stack);
      }
    }



  }


};
