
module.exports = {

  VERSION: "Default JavaScript folding player",


  bet_request: function(game_state, bet) {
    var hand = [];
    var in_action;
    var goodStartingHand = ['10', 'J', 'K', 'Q', 'A'];
    var in_action = game_state[in_action];
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
