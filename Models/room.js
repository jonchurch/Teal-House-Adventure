var Room = function(vnum, name, desc, exits, items, win) {

    var self = this;
    self.vnum = vnum || 'string';
    self.name = name || 'string'; 
    self.desc = desc || 'string';

    self.exits = exits || ["objects"];
    self.items = items || ['strings'];
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
