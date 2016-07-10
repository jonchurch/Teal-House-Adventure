/**
 * @param {number}
 */
var Player = function(uid) {
    self = this;
    self.uid = uid || false;
    self.inv = [{
       		"name": "pizza",
            "desc": "Single slice of the good stuff, cheese and sardine!",
            "isLoot": 1,
            "uuid": "666"
        
    }];
    self.win = false;
    self.current_location = { desc: 'Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon' };

};




/**
 * @param {object} item
 */
Player.prototype.addToInv = function(item) {

};

Player.prototype.move = function(room) {
    self = this;
    self.current_location = room;

};

Player.prototype.printInv = function() {
	self = this;
	var string = [];
	for (i = 0; i < self.inv.length; i += 1 ) {
		string.push(self.inv[i].name);
	}
	return string;
};

module.exports = Player;
