
/**
 * @param {number}
 */
var Player = function(uid){
	self = this;
	self.uid = uid || false;
	self.inv = [];
	self.win = false;
	self.current_location = {desc: 'Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon'};

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

module.exports = Player;
