var tealHouse = [
//I made the list of rooms an array so I could find them by their vnum,
// which will (hopefully?) correspond to their index number
// This structure, of loading the file I have here, seems like a bit of work for what I need to do...
    {
      "vnum": 0,
      "name": "Champagne Room",
      "desc": "Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon.",
      "contextualHelp": "Don't do drugs!",
      "action": {
          "take drug": "Better take this so no one gets hurt"
      },
      "exits": {
        "south": "quiet"
      },
      "items": {
        "drug": "Rolled up tube of sand and plants",
          "spoon": "This spoon is shiny and tiny. Could fit easily into a jar of peanut butter",
          "magazine": "The cover reads, Glue Enthusiasts Quarterly, issue #352. The pages are stuck together firmly"
      },
      "isQuitRoom": false
},
 {
    "vnum": 1,
      "name": "Quiet Room",
      "desc": "The walls are covered with art that seems misguided. This room is for relaxing, and you can tell. Plants grow from the ceiling in long vines.",
      "contextualHelp": "Good place to use drugs!",
      "action": {
          "use drug": "The drug is unlit"
      },
      "exits": {
        "north": "champ",
        "west": "sun"
      },
      "items": {
        "plant": "These plants look like they've been here a long time",
        "art": "Not quite to your taste, but a good atempt all the same"
      },
      "isQuitRoom": false
},  
    {
      "vnum": 2,
      "name": "Sun Room",
      "desc": "Light spills in from the 3 walls of windows around you. There is a large pile of sand with a stingray floating lazily above it",
      "contextualHelp": "Pet the stringray",
      "action": {
          "pet stingray": "Your pats seem appreciated as it coos slightly and nuzzles against your hand",
          "take sand": "You fill your pockets greedily"
      },
      "exits": {
        "east": "quiet"
        
      },
      "items": {
        "stingray": "Such a beautiful and misunderstood creature",
          "sand": "This is the good stuff. Pure Columbia by the looks of it"
      },
      "isQuitRoom": false
},

] ;//end top level array

module.exports = tealHouse;
