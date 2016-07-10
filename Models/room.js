var Room = function() {

    var self = this;
    self.vnum = vnum;
    self.name = name;
    self.desc = desc;

    self.exits = exits;
    self.items = items;
    self.isQuitRoom = win || false;

};

Room.prototype.removeItem = function(item) {
    self = this;
    if (self.items[item]) {
        delete self.items[item];
        return;
    }
};

Room.prototype.addItem = function(item) {
  //add item to Room.items
  // is room.items an array or object?
};


Room.prototype.onEnter = function(){
  self = this;

  if (self.isQuitRoom === true) { //Check if Win Room

  }
};

module.exports = Room;
