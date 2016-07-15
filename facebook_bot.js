/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


This is a sample Facebook bot built with Botkit.

This bot demonstrates many of the core features of Botkit:

* Connect to Facebook's Messenger APIs
* Receive messages based on "spoken" patterns
* Reply to messages
* Use the conversation system to ask questions
* Use the built in storage system to store and retrieve information
  for a user.

# RUN THE BOT:

  Follow the instructions here to set up your Facebook app and page:

    -> https://developers.facebook.com/docs/messenger-platform/implementation

  Run your bot from the command line:

    page_token=<MY PAGE TOKEN> verify_token=<MY_VERIFY_TOKEN> node facebook_bot.js [--lt [--ltsubdomain LOCALTUNNEL_SUBDOMAIN]]

  Use the --lt option to make your bot available on the web through localtunnel.me.

# USE THE BOT:

  Find your bot inside Facebook to send it a direct message.

  Say: "Hello"

  The bot will reply "Hello!"

  Say: "who are you?"

  The bot will tell you its name, where it running, and for how long.

  Say: "Call me <nickname>"

  Tell the bot your nickname. Now you are friends.

  Say: "who am I?"

  The bot will tell you your nickname, if it knows one for you.

  Say: "shutdown"

  The bot will ask if you are sure, and then shut itself down.

  Make sure to invite your bot into other channels using /invite @<my bot>!

# EXTEND THE BOT:

  Botkit has many features for building cool and useful bots!

  Read all about it here:

    -> http://howdy.ai/botkit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
require('dotenv').config();

if (!process.env.page_token) {
    console.log('Error: Specify page_token in environment');
    process.exit(1);
}

if (!process.env.verify_token) {
    console.log('Error: Specify verify_token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');
var Player = require('./Models/player');

var controller = Botkit.facebookbot({
    debug: false,
    access_token: process.env.page_token,
    verify_token: process.env.verify_token,
    json_file_store: 'storage.json'
});

var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();

var bot = controller.spawn();

controller.setupWebserver(process.env.port || 3000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!');

    });
});
/*
Instantiating the rooms array
 */
var Rooms =  require('./Models/rooms');
var rooms = new Rooms();
rooms.init();

var Commands = require('./Models/commands');


// console.log(rooms);


var pizzajon = new Player(process.env.pizzaid, {
    id: process.env.pizzaid,
    inv: [{
        "name": "pizza",
        "desc": "Single slice of the good stuff, cheese and sardine!",
        "isLoot": 1,
        "uuid": "666"
    }],
    win: false,
    current_location: { desc: 'Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon' }
});

function look(player_id, args) {
    var user = players[player_id];
    var result;
    if (!args) {
        result = user.current_location;
    }
}

//Beginnings of a commands loop
eventEmitter.on('data', function(bot, message, rooms, player) { //this could be on 'message_receieved', or I can do my own thing seperately like 'data'
    //split the input into command and arguements
    var data = message.text;
    var command = data.split(' ').shift();
    console.log('Command=',command);
    var args = data.split(' ').slice(1).join(' ');
    //Match command against Commands.player_commands @array
    //Do whatever you need to if command !=== something in Command.player_commands
    //like search for command in exit or skills
    if (!(command in Commands.player_commands)) {
        //look for exits
    }
    //If command IS found in Commands.player_commands, execute it!
    else {
        //call Commands.player_commands[command](args, player)
        Commands.player_commands[command](args, rooms, player, bot);
    }
});



controller.on('message_received', function(bot, message) {
  var player;
  if (message.user === '159939171089467') {
    return;
  }
  
controller.storage.users.get(message.user, function(err, user){
  console.log('user from storage=\n', user);
  if (!user) {
    player = new Player();
    player.id = message.user;
    controller.storage.users.save(player);
    console.log('saved new user!\n', player);
  } 
  else {
    player = new Player();
    player.load(user);
    console.log('Loaded existing player!\n', player);
  }
  eventEmitter.emit('data', bot, message, rooms, player);
} );
});


controller.hears('me', 'message_received', function(bot, message) {
    console.log(message);
    bot.reply(message, 'Check your logs!');
});

controller.hears('inv', 'message_received', function(bot, message) {
    result = 'Inventory: ' + pizzajon.getInv().join(', ');
    bot.reply(message, result);
});

function getPlayer(userID) {
    controller.storage.users.get(userID, function(err, user) {
        var result;
        if (!user) {
            console.log('No user found!');
            return;
        } else {
            return new Player(user.id, user);
        }
    });
}
