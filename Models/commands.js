var Commands = {
    player_commands: {
        /**
         * Sends player help info, Needs access to player, a way to send player a message, and takes args for help on specific topics. Also explains how to use help command!
         * @param  {string} args   help topics
         * @param  {object} player Player instance
         * @param  {object} bot    Messenger method?
         */
        help: function(args, player, bot) {

        },

        //send look any args and the player object who called it
        look: function(args, player, bot) {

            if (args) {
                console.log('Clever, aren\'t you? Args present!');
            } else {
                bot.reply(message, player.current_location);
                //Could do this like below, where the Messenger handles all communcation
                //Messenger.send(player, room.getDescription);

            }
        },
        get: function() {}
    }
};
