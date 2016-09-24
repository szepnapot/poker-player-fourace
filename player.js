
module.exports = {

  VERSION: "Default JavaScript folding player",
  var hand;
  var in_action;
  var goodStartingHand = ['10', 'J', 'K', 'Q', 'A'];

  bet_request: function(game_state, bet) {
    var in_action = game_state[in_action];
    // var hand = [game_state.players[in_action]['hole_cards'][0]['rank'], game_state.players[in_action]['hole_cards'][1]['rank']];
    // console.log(hand);
    console.log(in_action);
    bet(1000);
    console.log( 'game state + bet' );
    console.log( game_state );
    console.log( bet );
  },

  showdown: function(game_state) {

  }


};
