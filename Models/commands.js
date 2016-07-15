var Commands = {
    player_commands: {
        /**
         * Sends player help info, Needs access to player, a way to send player a message, and takes args for help on specific topics. Also explains how to use help command!
         * @param  {string} args   help topics
         * @param  {object} player Player instance
         * @param  {object} bot    Messenger method?
         */
        help: function(args, rooms, player, bot) {
            bot.say({ text: 'Your plea for help has been heard puny human. Now what?', channel: player.id });

        },

        /**
         * Sends description of room if no args, desc of args if args
         * @param  {string} args   Command args from player
         * @param  {object} rooms  Rooms object
         * @param  {object} player Current player object
         * @param  {object} bot    Messaging object
         */
        look: function(args, rooms, player, bot) {
            var room = rooms.getAt(player.getLoc());
            if (args) {
                console.log('args in look:',args);
                bot.say({
                    text: 'Clever, aren\'t you? Args present!',
                    channel: player.getId()
                });
                return;
            } else {
                bot.say({text: room.getDescription(), channel: player.getId()});
                //Could do this like below, where the Messenger handles all communcation
                //Messenger.send(player, room.getDescription);

            }
        },
        get: function() {}
    }
};

module.exports = Commands;
