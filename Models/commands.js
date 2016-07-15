var Commands = {
    player_commands: {
        /**
         * Sends player help info, Needs access to player, a way to send player a message, and takes args for help on specific topics. Also explains how to use help command!
         * @param  {string} args   help topics
         * @param  {object} player Player instance
         * @param  {object} bot    Messenger method?
         */
        help: function(args, rooms, player, players, bot) {
            bot.say({ text: 'Your plea for help has been heard puny human. Now what?', channel: player.id });

        },

        /**
         * Sends description of room if no args, desc of args if args
         * @param  {string} args   Command args from player
         * @param  {object} rooms  Rooms object
         * @param  {object} player Current player object
         * @param  {object} bot    Messaging object
         */
        look: function(args, rooms, player, players, bot) {
            var room = rooms.getAt(player.getLoc());
            if (args) {
                console.log('args in look:',args);
                bot.say({
                    text: 'Clever, aren\'t you? Args present!',
                    channel: player.getId()
                });
                return;
            } else {
                var exits = [];
                for (var i = 0; i < room.getExits().length; i += 1) {
                    exits.push(room.getExits()[i].direction);
                }
                exits.join('\n');
                bot.say({text: room.getDescription()+ '\nExits: ' + exits, channel: player.getId()});

            }
        },
        inv: function(args, rooms, player, players, bot) {
            bot.say({text: player.getInv().join(', '),
             channel: player.getId()
         });
        },
        //Come back to this after we work on Items
        get: function(args, rooms, player, players, bot) {
            var room = rooms.getAt(player.getLoc());
            var item;
            if (!args) {
                bot.say({text: 'Get what?', channel: player.getId()});
                return;
            }
            if (room.getItemInRoom(item)) {}
        },
    room_exits: function(args, rooms, player, players, bot) {
        console.log('Checking exits!');
        var room = rooms.getAt(player.getLoc());
        var exits = room.getExits().filter(function (e) {
            try {
                var regex = new RegExp("^" + args);
            }
            catch(err) {
                return false;
            }
            return e.direction.match(regex);
        });
        if (!exits.length) {
            return false;
        }
        if (exits.length > 1) {
            bot.say({text: "Where did you say exactly?", channel: player.getId()});
            return;
        }
        move(exits.pop(), rooms, player, players, bot);
    }
    }
};

module.exports = Commands;

function move(exit, rooms, player, players, bot){
    var room = rooms.getAt(exit.location);
    if (!room) {
        console.log('=========Player in limbo!!', player);
        return;
    }
    player.setLoc(exit.location);
    Commands.player_commands.look(null, rooms, player, players, bot);
    console.log(players);
}

