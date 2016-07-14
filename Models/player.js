/**
 * Player constructor, creates new instance of player
 * Use load function to config a player from the db
 */
var Player = function() {
    this.id = '';
    this.inv = [];
    this.win = false;
    this.location = '';

};


/**
 * @param {object} item
 */
Player.prototype.addToInv = function(item) {

};

Player.prototype.move = function(room) {
    this.location = room;

};

Player.prototype.getInv = function() {
	var array = [];
	for (i = 0; i < this.inv.length; i += 1 ) {
		array.push(this.inv[i]);
	}
	return array;
};
/**
 * Configures a player instance
 * @param  {object} config Contains player data from database
 */
Player.prototype.load = function(config) {
    this.id = config.id;
    this.inv = config.inv;
    this.win = config.win;
    this.current_location = config.location;

};
module.exports = Player;
