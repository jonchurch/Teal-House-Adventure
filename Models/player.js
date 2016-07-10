
/**
 * @param {number}
 */
var Player = function(uid){
	self = this;
	self.uid = uid || false;
	self.inv = [];
	self.win = false;
	self.current_location = {};

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
