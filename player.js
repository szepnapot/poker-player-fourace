
module.exports = {

  VERSION: "Default JavaScript folding player",


  bet_request: function(game_state, bet) {
    var hand;
    var cards = { "2" : 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8" : 8, "9" : 9, "10" : 10, "J" : 11, "Q": 12, "K": 13, "A": 14};
    console.log(cards["3"]);
    var in_action = game_state.in_action;
    var goodStartingHand = ['10', 'J', 'K', 'Q', 'A'];
    hand.push(game_state.players[0].hole_cards[0].rank);
    hand.push(game_state.players[0].hole_cards[1].rank);
    console.log(in_action);
    bet(1000);
    console.log( 'game state + bet' );
    console.log( game_state );
    console.log( bet );
  },

  showdown: function(game_state) {

  }


};
