/**
 * @param {number}
 */
var Player = function(id) {
    this.id = id || false;
    this.inv = [{
       		"name": "pizza",
            "desc": "Single slice of the good stuff, cheese and sardine!",
            "isLoot": 1,
            "uuid": "666"
        
    }];
    this.win = false;
    this.current_location = { desc: 'Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon' };

};




/**
 * @param {object} item
 */
Player.prototype.addToInv = function(item) {

};

Player.prototype.move = function(room) {
    this.current_location = room;

};

Player.prototype.printInv = function() {
	var string = [];
	for (i = 0; i < this.inv.length; i += 1 ) {
		string.push(this.inv[i].name);
	}
	return string;
};

module.exports = Player;
