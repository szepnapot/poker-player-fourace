
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    var in_action = game_state.in_action;
    var hand = game_state.players[in_action]['hole_cards'];
    console.log(hand);
    bet(900);
  },

  showdown: function(game_state) {

  }


};
