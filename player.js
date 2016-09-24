
module.exports = {

  VERSION: "Default JavaScript folding player",

  number_of_active_players: function(players) {
    var num_of_players = 0;
    for (var i = 0; i < players.length; i++) {
      if(players[i].status != "out") {
        num_of_players++;
      }
    }
    return num_of_players;
  },



  prepare_bet: function(hand, player_num, check_amount) {
    var cards = { "2" : 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8" : 8, "9" : 9, "10" : 10, "J" : 11, "Q": 12, "K": 13, "A": 14};
    var goodStartingHand = ["10", "A", "J", "Q", "K"];

    if (player_num > 3) {
      if (goodStartingHand.indexOf(hand[0]) > -1 || goodStartingHand.indexOf(hand[1]) > -1) {
          return 6000;
      } else {
        return 0;
      }
    } else {
      return check_amount;
    }
},

  get_hand: function(player) {
    var hand = [];
    hand.push(player.hole_cards[0].rank);
    hand.push(player.hole_cards[1].rank);
    return hand;
  },


  bet_request: function(game_state, bet) {
    var check_amount = game_state.current_buy_in - game_state.players[0].bet;
    var hand = this.get_hand(game_state.players[0]);
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
  },

  showdown: function(game_state) {
    console.log("========================== SHOWDOWN");
    console.log(game_state);
    // console.log("========================== OWN HAND");
    // console.log(game_state.players[0].hole_cards[0].rank);
    // console.log(game_state.players[0].hole_cards[1].rank);


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
