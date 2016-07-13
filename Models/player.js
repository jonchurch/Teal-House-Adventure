/**
 * @param {number}
 */
var Player = function(id, user) {
    this.id = id;
    this.inv = user.inv || [{
       		"name": "pizza",
            "desc": "Single slice of the good stuff, cheese and sardine!",
            "isLoot": 1,
            "uuid": "666"
        
    },{
       		"name": "dust",
            "desc": "Almost like sand, but not as tasty",
            "isLoot": 1,
            "uuid": "777"
        
    }];
    this.win = user.win || false;
    this.current_location = user.current_location || { desc: 'Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon' };

};

/**
 * @param {object} item
 */
Player.prototype.addToInv = function(item) {

};

Player.prototype.move = function(room) {
    this.current_location = room;

};

Player.prototype.getInv = function() {
	var array = [];
	for (i = 0; i < this.inv.length; i += 1 ) {
		array.push(this.inv[i].name);
	}
	return array;
};

module.exports = Player;
