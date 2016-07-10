

var Item = function(name, desc, loot, uuid ){
	self = this;
	self.name = name;
	self.desc = desc;
	self.isLoot = loot || -1;
	self.uuid = uuid || 0;
};


//var spoon = new Item('spoon', 'Shiny metal utensil', 1, '001');


module.exports = Item;
