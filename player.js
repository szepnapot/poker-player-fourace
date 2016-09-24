
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state, bet) {
    bet(1000);
    console.log( 'game state + bet' );
    console.log( game_state );
    console.log( bet );
  },

  showdown: function(game_state) {

  }
};
