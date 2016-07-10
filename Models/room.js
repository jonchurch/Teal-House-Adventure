var Room = function() {

    var self = this;
    self.vnum = vnum;
    self.name = name;
    self.desc = desc;

    self.exits = exits;
    self.items = items;

};

Room.prototype.removeItem = function(item) {
    self = this;
    if (self.items[item]) {
        delete self.items[item];
        return;
    }
};
