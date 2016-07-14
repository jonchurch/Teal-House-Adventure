var Room = function(config) {

    this.vnum = '';
    this.name ='';
    this.desc ='';

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


Room.prototype.onEnter = function(){

  if (this.isQuitRoom === true) { //Check if Win Room

  }
};

//Added this for our look command
Room.prototype.getDescription = function() {
  return this.desc;
};

module.exports = Room;
