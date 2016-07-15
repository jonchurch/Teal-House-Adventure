/*var Map = function(){
  var mapFile = require('../teal.js');
   this.rooms = {};
   this.load = function(mapFile){
      this.rooms = mapFile;
   };

   this.load(mapFile);
};
Map.prototype.load = function(file){
  this.rooms = this.mapFile;
};

var map = new Map();
map.load(mapFile);
console.log(map.rooms[0]);
// console.log(mapFile);
*/

var Rooms = function() {
    this.rooms = [];

    this.init = function() {
        var rooms_data = require('../teal.js');
        for (i = 0; i < rooms_data.length; i += 1) {
            var config = rooms_data[i];
            var room = new Room();
            // console.log(config);
            room.load(config);
            this.rooms.push(room);
        }
        console.log('The rooms were just loaded!');
    };
    this.getAt = function(location) {
        return this.rooms[location]; //? this.rooms[location] : false;
    };

};
   

var Room = function(config) {

    this.vnum = '';
    this.name = '';
    this.desc = '';

    this.exits = [];
    this.items = [];
    this.isQuitRoom = false;

};

Room.prototype.load = function(config) {
    this.vnum = config.vnum;
    this.name = config.name;
    this.desc = config.desc;

    this.exits = config.exits;
    this.items = config.items;
    this.isQuitRoom = config.isQuitRoom;

};

Room.prototype.removeItem = function(item) {
    if (this.items[item]) {
        delete this.items[item];
        return;
    }
};

Room.prototype.addItem = function(item) {
    //add item to Room.items
    // is room.items an array or object?
};


Room.prototype.onEnter = function() {

    if (this.isQuitRoom === true) { //Check if Win Room

    }
};

//Added this for our look command
Room.prototype.getDescription = function() { return this.desc; };
Room.prototype.getExits = function(){ return this.exits; };
Room.prototype.getLoc = function() { return this.vnum; };
Rooms.prototype.getItems = function() { return this.items; };
module.exports =  Rooms;


